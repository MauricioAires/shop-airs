import { useState } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import axios from 'axios'

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
    defaultPriceId: string
  }
}

export default function ProductPage({ product }: ProductPageProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      /**
       * NOTE: Conectar com uma ferramenta de observabilidade (Datadog | Sentry)
       */
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </S.ImageContainer>

      <S.ProductDetails>
        <h1> {product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button
          disabled={isCreatingCheckoutSession}
          type="button"
          onClick={() => handleBuyProduct()}
        >
          Comprar Agora
        </button>
      </S.ProductDetails>
    </S.ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    /**
     * NOTE: Aqui será tudo que será criado na build, os produtos
     * mais vendidos ou mais acessados
     */
    paths: [
      {
        params: {
          id: 'prod_NToFRCwzYq6Qrv',
        },
      },
    ],

    /**
     * false => se acessar uma página que não foi gerado, deve retornar 404
     *
     * true => quando acessar uma página que não gerado, ele vai executar a
     * função getStaticProps no modo SSR e gerar o estático e disponibilizar
     * para os próximos acessos.
     *
     *
     * blocking => que bloqueia a exibição da tela até a função serverSide
     * ser executada( dessa forma não irá exibir um loading)
     *
     */
    fallback: true,
  }
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
        defaultPriceId: price.id,
      },
    },
    // revalidate: 60 * 60 * 2, // 2 hour
  }
}
