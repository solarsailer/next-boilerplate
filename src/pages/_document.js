import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

// -------------------------------------------------------------
// Document.
// -------------------------------------------------------------

export default class StyledDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>{/* Add Google Fonts or any other link tags here. */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
