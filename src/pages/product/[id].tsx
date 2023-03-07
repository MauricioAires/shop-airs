import { GetStaticProps } from 'next'
import Image from 'next/image'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import * as S from '../../styles/pages/product'

interface ProductPageProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </S.ImageContainer>

      <S.ProductDetails>
        <h1> {product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar Agora</button>
      </S.ProductDetails>
    </S.ProductContainer>
  )
}

export const getStaticProps: GetStaticProps<
  any,
  {
    id: string
  }
> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100), // preço em centavos * 100
      },
    },
    revalidate: 60 * 60 * 2, // 2 hour
  }
}
