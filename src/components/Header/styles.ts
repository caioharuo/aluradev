import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2rem;

    input {
      width: 100%;
      height: 3.5rem;
      max-width: 752px;

      padding: 1rem 0.875rem;

      background: rgba(255, 255, 255, 0.16);
      color: var(--white);
      border: none;
      border-radius: 0.5rem;

      transition: background 0.2s;

      &::placeholder {
        color: var(--white);
      }

      &:hover {
        background: rgba(255, 255, 255, 0.24);
      }
    }

    > div {
      display: flex;
      align-items: center;

      padding: 0.75rem;
      border-radius: 0.5rem;

      transition: background 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      img {
        border-radius: 50%;
        min-width: 32px;
      }

      span {
        margin-left: 0.5rem;
      }
    }
  }
`;
