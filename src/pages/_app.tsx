import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from '@/assets/logo.svg'
import Image from 'next/image'

// NOTE: Load styles once
globalStyles()

import * as S from '@/styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image src={logoImg} alt="" />
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
