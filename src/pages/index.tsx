import Image from 'next/image'
import { GetServerSideProps } from 'next'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import * as S from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
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
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <S.Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </S.Product>
      ))}
    </S.HomeContainer>
  )
}

/**
 * NOTE: Todo código aqui adicionado não será retornado
 * para o usuário final, dessa forma aqui pode ser feito
 * requisições com chaves secretas
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount as number) / 100, // preço em centavos * 100
    }
  })

  return {
    props: {
      products,
    },
  }
}
