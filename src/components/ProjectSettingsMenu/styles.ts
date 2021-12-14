import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    font-size: 0.75rem;
    font-weight: normal;

    letter-spacing: 0.4em;
    text-transform: uppercase;

    margin-bottom: 1rem;
  }

  input,
  textarea,
  select {
    background: rgba(255, 255, 255, 0.16);
    padding: 1rem 0.875rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    color: var(--white);
    transition: background 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.24);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.64);
      opacity: 1;
    }
  }

  select {
    color: rgba(255, 255, 255, 0.64);
    cursor: pointer;
  }

  optgroup,
  option {
    color: var(--white);
  }
`;

export const ProjectSettings = styled.div`
  display: flex;
  flex-direction: column;

  input {
    max-width: 272px;

    @media (max-width: 1440px) {
      & {
        max-width: 100%;
      }
    }
  }

  textarea {
    height: 80px;

    max-width: 272px;
    max-height: 80px;
    resize: none;

    margin-top: 1rem;

    @media (max-width: 1440px) {
      & {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 1440px) {
    & {
      margin-top: 2.5rem;
    }
  }
`;

export const PersonalizationSettings = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2.5rem;

  .input-color-wrapper {
    width: 100%;

    margin-top: 1rem;
    margin-bottom: 2rem;

    border: 1px solid var(--white);
    border-radius: 0.5rem;

    @media (max-width: 1440px) {
      & {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    input[type='color'] {
      width: 100%;

      height: 56px;
      padding: 0.5rem;

      background: transparent;

      max-height: 56px;

      cursor: pointer;
    }

    input[type='color']::-webkit-color-swatch {
      border-color: transparent;
      border-radius: 0.25rem;
    }

    input[type='color']::-moz-color-swatch {
      border-color: transparent;
      border-radius: 0.25rem;
    }
  }

  select {
    width: 100%;
    height: 56px;
    max-height: 56px;
  }

  @media (max-width: 1440px) {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 768px) {
    > div {
      flex-direction: column;
    }
  }
`;
