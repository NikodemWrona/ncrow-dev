/* eslint-disable import/no-internal-modules */
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { GTM_ID } from '@__/config';

import '../styles/css/reset.css';
import '../styles/css/root.css';
import 'notyf/notyf.min.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element | null {
  if(!global.window) {
    return null;
  }
  
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
