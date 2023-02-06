import React from 'react'
import {createGlobalStyle} from 'styled-components'

import normalize from './normalize'
import theme from './theme'
import base from './base'
import app from './app'

// -------------------------------------------------------------
// Manifest.
// -------------------------------------------------------------

const NormalizeGlobalStyles = createGlobalStyle`${normalize}`
const ThemeGlobalStyles = createGlobalStyle`${theme}`
const BaseGlobalStyles = createGlobalStyle`${base}`
const AppGlobalStyles = createGlobalStyle`${app}`

const Manifest = () => (
  <>
    <NormalizeGlobalStyles />
    <ThemeGlobalStyles />
    <BaseGlobalStyles />
    <AppGlobalStyles />
  </>
)

export default Manifest
