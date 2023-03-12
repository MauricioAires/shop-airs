import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import { CartProvider } from 'use-shopping-cart'

import logoImg from '@/assets/logo.svg'

import { ShoppingCart } from '@/components/ShoppingCart'

import { globalStyles } from '@/styles/global'

// NOTE: Load styles once
globalStyles()

import * as S from '@/styles/pages/app'

const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY as string

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={STRIPE_PUBLIC_KEY}
      currency="BRL"
      shouldPersist={true}
      loading={<p aria-live="polite">Loading redux-persist...</p>}
    >
      <S.Container>
        <S.Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          <ShoppingCart />
        </S.Header>
        <Component {...pageProps} />
      </S.Container>
    </CartProvider>
  )
}
/**
 * NOTE: File system Routing
 *
 * Roteamento baseado em arquivos físicos
 */
