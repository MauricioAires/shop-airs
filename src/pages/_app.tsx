import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '@/assets/logo.svg'

// NOTE: Load styles once
globalStyles()

import * as S from '@/styles/pages/app'
import Link from 'next/link'
import { ShoppingCart } from '@/components/ShoppingCart'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <ShoppingCart />
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  )
}
/**
 * NOTE: File system Routing
 *
 * Roteamento baseado em arquivos físicos
 */
