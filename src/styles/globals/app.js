import {css} from 'styled-components'

// -------------------------------------------------------------
// App.
// -------------------------------------------------------------

export default css`
  /**
   * Reset.
   */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  ul,
  ol,
  dl {
    margin-top: initial;
    margin-bottom: initial;
  }

  ol,
  ul {
    list-style: none;
    padding-left: initial;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: normal;
    font-family: var(--font-heading-stack);
    line-height: var(--font-heading-line-height);
  }

  /**
   * App.
   */

  a {
    color: var(--color-accent);
  }

  a:hover {
    /* Hint: use lighter color. */
  }

  a:active,
  a:focus {
    /* Hint: use darker color. */
  }
`
