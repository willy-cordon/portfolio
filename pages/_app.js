//pages/_app.js
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
// import {CRMProvider} from '../context/CRMContext';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      // <CRMProvider>
      //     <Component {...pageProps} />
      // </CRMProvider>
    }
  }, [router.events])

  return <Component {...pageProps} />
}