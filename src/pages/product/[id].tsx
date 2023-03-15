import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import * as S from '../../styles/pages/product'
import Head from 'next/head'
import { Product } from 'use-shopping-cart/core'
import { useShoppingCart } from 'use-shopping-cart'

type IProduct = {
  id: string
  name: string
  imageUrl: string
  price: number
  formattedPrice: string
  defaultPriceId: string
  description: string
}

interface ProductPageProps {
  product: IProduct
}

export default function ProductPage({ product }: ProductPageProps) {
  const { isFallback } = useRouter()
  const { addItem } = useShoppingCart()

  if (isFallback) {
    return <p>Loading...</p>
  }

  function handleAddShoppingCart(product: IProduct) {
    const payload: Product = {
      id: product.id,
      price_id: product.defaultPriceId,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      currency: 'BRL',
    }

    addItem(payload, {
      count: 1,
    })
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <S.ProductContainer>
        <S.ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </S.ImageContainer>

        <S.ProductDetails>
          <h1> {product.name}</h1>
          <span>{product.formattedPrice}</span>
          <p>{product.description}</p>
          <button type="button" onClick={() => handleAddShoppingCart(product)}>
            Colocar na sacola
          </button>
        </S.ProductDetails>
      </S.ProductContainer>
    </>
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
        price: price.unit_amount,
        formattedPrice: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100), // preço em centavos * 100
        defaultPriceId: price.id,
      },
    },
    // revalidate: 60 * 60 * 2, // 2 hour
  }
}
