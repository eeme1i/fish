import '../styles/globals.css'
import Router from "next/router"
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import * as ga from '../lib/analytics'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
      <Component 
        {...pageProps} 
        key={route}
      />)
}

export default MyApp
