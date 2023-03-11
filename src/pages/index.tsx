import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import * as S from '@/styles/pages/home'
import { ProductDetails } from '@/components/ProductDetails'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <S.HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            passHref
            legacyBehavior
            prefetch={false}
          >
            <S.Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <ProductDetails price={product.price} name={product.name} />
            </S.Product>
          </Link>
        ))}
      </S.HomeContainer>
    </>
  )
}

/**
 * NOTE: getServerSide => Todo código aqui adicionado não será retornado
 * para o usuário final, dessa forma aqui pode ser feito
 * requisições com chaves secretas
 */

/**
 * NOTE: getStaticProps => esse código não é executado a cada
 * requisição, ele é chamado em apenas dois casos
 *
 * 1 -> Quando está gerando o build da aplicação
 *
 * Nesse modelo não temos acessando ao contexto da requisição, então
 * não temos como passar um token de usuário logado, headers
 */

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100), // preço em centavos * 100
    }
  })

  return {
    revalidate: 60 * 60 * 2, // 2 horas
    props: {
      products,
    },
  }
}
