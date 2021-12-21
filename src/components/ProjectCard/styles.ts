import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 520px;
`;

export const CardCodeEditor = styled.div`
  height: 288px;

  textarea {
    resize: none;

    background-color: var(--gray-900);

    outline: none;

    width: 100%;
    height: 100%;

    color: var(--white);
    font-family: 'Roboto Mono', monospace;
    font-size: 0.6875rem;
    line-height: 0.9375rem;

    border: none;
    border-radius: 0.5rem;

    padding: 0.75rem;

    overflow: hidden;

    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);

    &[disabled] {
      opacity: 1;
      cursor: default;
    }
  }

  img {
    position: absolute;
    index: 9999;
    left: 36px;
    top: 36px;

    width: 39px;
    height: 9px;
  }
`;

interface BorderColorProps {
  borderColor: string;
}

export const BorderColor = styled.div<BorderColorProps>`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 1.5rem;

  border-radius: 0.5rem;
  background-color: ${(props) => props.borderColor};
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.16);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  &:hover {
    .card-action {
      visibility: visible;
      opacity: 1;
      max-height: 64px;
    }
  }

  h2 {
    font-size: 1.3125rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    opacity: 0.8;
  }

  .card-action {
    visibility: hidden;
    opacity: 0;
    max-height: 0;

    transition: visibility 0.1s, opacity 1s, max-height 0.3s linear;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1.5rem;

    .actions {
      display: flex;
      align-items: center;

      .comments,
      .likes {
        background: transparent;
        border: none;

        color: var(--white);

        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 1rem;

        padding: 0.5rem;

        transition: background 0.2s;

        cursor: pointer;

        &:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        &:active {
          background: rgba(255, 255, 255, 0.16);
        }
      }
    }

    .user-info {
      display: flex;
      align-items: center;

      padding: 0.5rem;
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
