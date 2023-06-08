import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faR } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
