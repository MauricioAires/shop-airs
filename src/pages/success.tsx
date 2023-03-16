import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import * as S from '../styles/pages/success'
import Head from 'next/head'

type Product = {
  name: string
  imageUrl: string
}
interface SuccessPageProps {
  customerName: string
  products: Product[]
}

export default function SuccessPage({
  customerName,
  products,
}: SuccessPageProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <S.SuccessContainer>
        <h1>Compra efetuada!</h1>

        <S.ProductsWrapper>
          {products.map((product) => (
            <S.ImageContainer key={product.imageUrl}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </S.ImageContainer>
          ))}
        </S.ProductsWrapper>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de
          <strong> {products.length}</strong> camiseta(s) já está a caminho da
          sua casa.
        </p>

        <Link href="/">Voltar ao catálago</Link>
      </S.SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data.map((product) => {
    const { name, images } = product.price?.product as Stripe.Product

    return {
      name: name,
      imageUrl: images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
