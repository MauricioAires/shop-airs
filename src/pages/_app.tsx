import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

// NOTE: Load styles once
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
/**
 * NOTE: File system Routing
 *
 * Roteamento baseado em arquivos físicos
 */
