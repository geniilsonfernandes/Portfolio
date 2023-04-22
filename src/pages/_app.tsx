/* istanbul ignore file */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Genilson Fernandes</title>
          <link rel="shortcut icon" href="/img/favicon.ico" />

          <meta
            name="description"
            content="Sou especialista em criar experiências digitais
        incríveis. sou capaz de oferecer soluções robustas e eficientes para
        transformar sua visão em realidade. Vamos colaborar juntos para criar
        uma presença digital de sucesso para sua empresa."
          />

          <meta property="og:title" content="Genilson Fernandes" />
          <meta
            property="og:description"
            content="Sou especialista em criar experiências digitais
        incríveis."
          />
          <meta property="og:image" content="/img/grportfolio.png" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Genilson Fernandes" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
