import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 752px;

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1440px) {
    & {
      position: initial;
      max-width: 100%;
    }
  }

  textarea {
    resize: none;

    background-color: var(--gray-900);

    outline: none;

    width: 100%;
    height: 100%;
    min-height: 366px;

    color: var(--white);
    font-family: 'Roboto Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.125rem;

    border: none;
    border-radius: 0.5rem;

    padding: 3.25rem 1rem 1rem 1rem;

    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  }

  img {
    position: absolute;
    index: 9999;
    left: 48px;
    top: 48px;

    width: 52px;
    height: 12px;
  }
`;

interface BorderColorProps {
  borderColor: string;
}

export const BorderColor = styled.div<BorderColorProps>`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 2rem;
  margin-bottom: 2rem;

  border-radius: 0.5rem;
  background-color: ${(props) => props.borderColor};
`;
