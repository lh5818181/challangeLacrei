import React from 'react'
import type { AppProps } from 'next/app'
// import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/globalStyles'
import theme from '@styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <title>Lacrei Saúde - Voluntariado Front-end</title>
        <meta name="description" content="Projeto voluntário Front-end focado em acessibilidade e inclusão." />
        <html lang="pt-BR" />
      </Head> */}
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}