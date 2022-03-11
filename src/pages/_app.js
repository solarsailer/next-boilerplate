import React from 'react'
import Head from 'next/head'
import {ThemeProvider} from 'styled-components'

import GlobalStyles from '../styles/globals/manifest'

// -------------------------------------------------------------
// Theme.
// -------------------------------------------------------------

const theme = {}

const title = 'Next Boilerplate'
const author = 'Matthieu Oger'
const description = 'Boilerplate for a Next.js + styled-components.'
const url = 'https://matthieuoger.com'

const enableSearchEngineIndexing = false

// -------------------------------------------------------------
// App.
// -------------------------------------------------------------

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>{title}</title>

        {enableSearchEngineIndexing && (
          <meta name="robots" content="noindex, nofollow" />
        )}

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico?v=0001" />
        <link rel="mask-icon" href="/favicon.svg?v=0001" />

        <meta name="author" content={author} />
        <meta name="description" content={description} />

        <meta property="og:locale" content="en" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={'/feed.png'} />
        <meta property="og:image:height" content="1920" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:alt" content={description} />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
