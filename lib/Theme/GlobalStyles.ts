import { createGlobalStyle } from 'styled-components'
import { Theme } from './types'
import { getCSSForFontFaces } from '../utility/FontFace/getCSSForFontFaces'

const GlobalStyles = createGlobalStyle<{
  theme: Theme
}>`

  /* 
    CSS Reset

    http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*
    Font Faces
  */


  ${p => getCSSForFontFaces(p.theme.fontFaces)}

  /*
    Global Styles
  */

  html {
    background-color: ${p =>
      p.theme.palette.background.value};
    min-height: 100%;
    height: auto;
    font-family: ${p => p.theme.fontFaces[0].fontFamily};
    overflow: auto;
  }
  
  a:-webkit-any-link {
    text-decoration: none;
  }
  
  
  body {
    min-height: 100%;
    height: auto;
  }
  
  body, body * {
    box-sizing: border-box;
    cursor: default;

    font-family: ${p => p.theme.body1.fontFamily};
    line-height: ${p =>
      `calc(${p.theme.body1.fontSize} * 1.75)`};
    font-size: ${p => p.theme.body1.fontSize};
    font-weight: ${p => p.theme.body1.fontWeight};
    letter-spacing: ${p => p.theme.body1.kerning};
    color: ${p => p.theme.palette.background.contrast};
  }

  #root {
    min-height: 100vh;
    height: 100%;
  }

  b {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }
`

export default GlobalStyles
