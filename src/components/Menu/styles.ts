import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;

  h1 {
    font-size: 0.75rem;
    font-weight: normal;

    letter-spacing: 0.4em;
    text-transform: uppercase;
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    align-items: center;

    margin-top: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    span {
      margin-left: 1rem;
    }
  }
`;
