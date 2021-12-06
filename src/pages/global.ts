import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
      --white: #ffffff;

      --gray-900: #141414;

      --blue-100: #96B9FD;
      --blue-200: #7BA4FC;
      --blue-300: #5081FB;
      --blue-900: #051D3B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      background: var(--blue-900);
      color: var(--white);
    }

    button {
      cursor: pointer;
    }

    body, input, textarea, select, button {
      font-family: Inter, sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
`;
