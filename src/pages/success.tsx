import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

import * as S from '../styles/pages/success'
import Head from 'next/head'

interface SuccessPageProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function SuccessPage({
  customerName,
  product,
}: SuccessPageProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <S.SuccessContainer>
        <h1>Compra efetuada!</h1>

        <S.ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </S.ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua
          <strong> {product.name}</strong> já está a caminho da sua casa.
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
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
