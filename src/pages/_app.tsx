/* eslint-disable import/no-internal-modules */
import type { AppProps } from 'next/app'

import '../styles/css/reset.css'
import '../styles/css/root.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
