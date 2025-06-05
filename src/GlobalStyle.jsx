import { createGlobalStyle } from 'styled-components';

import { colors, opacity, shadows } from './util/variables';

const GlobalStyle = createGlobalStyle`
  /* https://meyerweb.com/eric/tools/css/reset/ */
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
    color: ${colors.white}
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

  /* --------------------------------------------------------------- */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
    font-family: 'Lato', sans-serif;
    max-height: 100vh;
    max-width: 100vw;
    background-color: ${colors.blue2};
    overflow-x: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(50% + ${({ isMini }) => (isMini ? '4rem' : '13rem')});
      height: 90%;
      aspect-ratio: 1/1;
      transform: translate(-50%, -50%);
      background-image: url(${import.meta.env.BASE_URL + 'background-logo.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: -1;
      ${({ page }) => (page === 'welcome' || !page ? 'opacity: 0;' : '')}
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  h1, h2, h3 {
    width: 100%;
  }

  h1 {
    font-size: 10rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2.4rem;

    .button-group {
      display: flex;
      gap: 1rem;
      align-self: flex-end;
    }
  }

  input, textarea {
    width: 100%;
  }

  button {
    white-space: nowrap;
    vertical-align: middle;
    font-family: 'Lato', sans-serif;
  }

  label {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: ${colors.white + opacity[60]};
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .box {
    /* Using pseudo element for background blur, otherwise nested elements would not be to use blur as well */
    position: relative;
    border-radius: .8rem;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      var(--inner-color) 0,
      var(--outer-color) 35rem
    );

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: ${colors.white + opacity[3]};
      border-top: 1px solid ${colors.highlightBlue};
      border-radius: .8rem;
      box-shadow: ${shadows.cardShadowSharp}, ${shadows.cardShadowSoft};
      backdrop-filter: blur(20px);
      z-index: -1;
    }
  }

  .warning {
    width: 100%;
    padding: .8rem 1.6rem;
    border: 1px solid ${colors.warning + opacity[50]};
    border-radius: .8rem;
    background-color: ${colors.warningDark + opacity[50]};
    text-align: center;
  }

  .icon {
    filter: drop-shadow(${shadows.shadowSmall});
    transition: color .25s, opacity .25s;
    cursor: pointer;

    &:hover {
      animation: .5s ease-out bobbing forwards;
    }
  }

  hr {
    height: .2rem;
    min-height: .2rem;
    border-width: 0;
    background: linear-gradient(to right, rgba(0, 96, 251, 0), rgba(0, 96, 251, .5), rgba(0, 96, 251, 0));    
  }

  .vr {
    min-height: 100%;
    min-width: .2rem;
    flex-shrink: 0;
    background: linear-gradient(to bottom, rgba(0, 96, 251, 0), rgba(0, 96, 251, .5), rgba(0, 96, 251, 0));
  }

  #notification {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 1003;
  }

  #modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
  }

  .priority-tag {
    display: inline-block;
    width: fit-content;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${colors.white};
    padding: 0.4rem 1.2rem;
    background-color: ${colors.white + opacity[10]};
    white-space: nowrap;
    text-transform: uppercase;
    border-top: 1px solid ${colors.white + opacity[25]};
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-radius: 2rem;
    box-shadow: ${shadows.shadowSmall};

    &.low {
      background-color: ${colors.valid + opacity[25]}
    }
    &.medium {
      background-color: ${colors.warning + opacity[25]}
    }
    &.high {
      background-color: ${colors.invalid + opacity[25]}
    }
  }

  // -------- animations --------
  @keyframes neon-flicker {
    0% {opacity: 0;}
    14% {opacity: 0;}
    15% {opacity: .33;}
    29% {opacity: .33;}
    30% {opacity: 0;}
    44% {opacity: 0;}
    45% {opacity: .66;}
    59% {opacity: .66;}
    60% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes bobbing {
    0% {transform: scale(1);}
    40% {transform: scale(1.4);}
    60% {transform: scale(1.2);}
    100% {transform: scale(1.3);}
  }

  @keyframes popIn {
    0% {opacity: 0; transform: scale(.98);}
    80% {opacity: 1; transform: scale(1.02);}
    100% {opacity: 1; transform: scale(1);}
  }

  @keyframes highlighter {
    0% {background-color: transparent;}
    40% {background-color: ${colors.blue3 + opacity[50]};}
    100% {background-color: transparent;}
  }

  @keyframes highlighterGreen {
    0% {background-color: transparent;}
    40% {background-color: ${colors.valid + opacity[20]};}
    100% {background-color: transparent;}
  }

  @keyframes highlighterRed {
    0% {background-color: transparent;}
    40% {background-color: ${colors.invalid + opacity[20]};}
    100% {background-color: transparent;}
  }

  @keyframes pulseShadow {
    from {box-shadow: 0 0 0 0 ${colors.highlightBlue + opacity[25]}}
    to {box-shadow: 0 0 0 1.2rem ${colors.highlightBlue + opacity[0]}}
  }

  @keyframes grow {
    0% {transform: scale(1);}
    100% {transform: scale(1.3);}
  }

  @keyframes gloss {
    0% {
      background: linear-gradient(45deg, transparent 35%, ${
        colors.white + opacity[3]
      } 45%, ${colors.white + opacity[3]} 55%, transparent 55%);
      background-size: 200%;
      background-position-x: 150%;
    }

    100% {
      background: linear-gradient(45deg, transparent 35%, ${
        colors.white + opacity[3]
      } 45%, ${colors.white + opacity[3]} 55%, transparent 55%);
      background-size: 200%;
      background-position-x: -50%;
    }
  }

  @keyframes fade-left {
    0% {
      opacity: 1;
    }

    100% {
      transform: translateX(-50%);
      opacity: 0;
    }
  }

  /* Scrollbar styling (Mozilla not supported) */
  ::-webkit-scrollbar {
    height: .8rem;
    width: .8rem;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${colors.white + opacity[3]};
    border-top: 1px solid ${colors.highlightBlue};
    border-radius: .8rem;
    box-shadow: 0 0 .8rem rgba(0, 96, 251, .6) inset;
    cursor: pointer;

    &:hover {
      border: 1px solid ${colors.highlightBlue};
      box-shadow: 0 0 .8rem rgba(0, 96, 251, 1) inset;
    }
  }

  @-moz-document url-prefix() {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${colors.white + opacity[25]} transparent;
    }  
  }
`;

export default GlobalStyle;
