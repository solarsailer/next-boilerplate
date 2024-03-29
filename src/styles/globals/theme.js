import {css} from 'styled-components'

// - Use HSL or HSLA everywhere
// - Exceptions: `black` or `white`

// -------------------------------------------------------------
// Themes.
// -------------------------------------------------------------

const lightTheme = css`
  --color-page-content: hsl(0, 0%, 5%);
  --color-page-background: hsl(0, 0%, 100%);
  --color-page-overscroll: hsl(0, 0%, 100%);
  --color-selection-foreground: hsl(0, 0%, 100%);
  --color-selection-background: var(--color-accent);
`

const darkTheme = css`
  --color-page-content: hsl(0, 0%, 100%);
  --color-page-background: hsl(0, 0%, 10%);
  --color-page-overscroll: hsl(0, 0%, 10%);
  --color-selection-foreground: hsl(0, 0%, 100%);
  --color-selection-background: var(--color-accent);
`

export default css`
  /* 1. Light mode by default. */
  :root {
    --hue-accent: 240;
    --color-accent: hsl(var(--hue-accent), 100%, 50%);

    --typographic-rhythm: 62.5%;
    --typographic-size: 1.6em;

    --w-thin: 100;
    --w-extra-light: 200;
    --w-light: 300;
    --w-regular: 400;
    --w-medium: 500;
    --w-semi-bold: 600;
    --w-bold: 700;
    --w-extra-bold: 800;
    --w-black: 900;

    --font-body-stack: Verdana, sans-serif;
    --font-body-line-height: 1.4;
    --font-heading-stack: Georgia, serif;
    --font-heading-line-height: 1.4;

    ${lightTheme};
  }

  /* 2. Check user preference. */
  @media (prefers-color-scheme: dark) {
    :root {
      ${darkTheme};
    }
  }

  /* 3. Then, check if the user opted-in a specific theme. */
  html[data-theme='light'] {
    ${lightTheme};
  }

  html[data-theme='dark'] {
    ${darkTheme};
  }
`
