import { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { DefaultSeo } from "next-seo"
import NextNProgress from "nextjs-progressbar"
import { useEffect } from "react"

import Analytics from "@components/Analytics"
import Layout from "@components/Layout"
import * as gtag from "@lib/gtag"
import GlobalStyles from "@styles/global"

import SEO from "../../next-seo.config"

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Lucas Kaíque</title>
        <link
          rel="shortcut icon"
          href="/assets/img/lucaskaique-thumbnail.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/img/lucaskaique-thumbnail.jpg"
        />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="google-site-verification"
          content="PyTe9sCP4SOqxKSYrFKmGSkrVY23mjePNyTUE0K_vXQ"
        />
        <meta
          name="description"
          content="Um blog de um Engenheiro de Software, Produtor de Eventos, DJ no tempo livre e fala de Javascript, React e outras tecnologias."
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Layout>
        <NextNProgress
          color="#F231A5"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}

export default App
