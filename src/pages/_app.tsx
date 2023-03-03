import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}
/**
 * NOTE: File system Routing
 *
 * Roteamento baseado em arquivos físicos
 */
