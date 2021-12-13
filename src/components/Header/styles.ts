import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 2rem;
  padding-bottom: 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.5rem;

    input {
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;

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

      @media (max-width: 1440px) {
        & {
          position: initial;
          margin-left: 2.5rem;
          margin-right: 2.5rem;
        }
      }
    }

    .menu-hamburguer {
      display: none;
      width: 48px;
      height: 48px;

      @media (max-width: 1440px) {
        & {
          display: inline-block;
        }
      }
    }

    .user-info {
      display: flex;
      align-items: center;

      padding: 0.75rem;
      border-radius: 0.5rem;

      transition: background 0.2s;

      @media (max-width: 1440px) {
        & {
          display: none;
        }
      }

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
