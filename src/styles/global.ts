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

    a {
      color: inherit;
      text-decoration: none;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
`;
