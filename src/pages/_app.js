import React from 'react'
import {ThemeProvider} from 'styled-components'

import GlobalStyles from '../styles/globals/manifest'

// -------------------------------------------------------------
// Theme.
// -------------------------------------------------------------

const theme = {}

// -------------------------------------------------------------
// App.
// -------------------------------------------------------------

export default function App({Component, props}) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Component {...props} />
      </>
    </ThemeProvider>
  )
}
