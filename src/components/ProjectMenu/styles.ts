import styled from 'styled-components';

export const Container = styled.div`
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
  }

  textarea {
    height: 80px;

    max-width: 272px;
    max-height: 80px;
    resize: none;

    margin-top: 1rem;
  }
`;

export const PersonalizationSettings = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2.5rem;

  .input-color-wrapper {
    margin-top: 1rem;
    border: 1px solid var(--white);
    border-radius: 0.5rem;

    input[type='color'] {
      width: 100%;
      height: 56px;
      padding: 0.5rem;

      background: transparent;

      max-height: 56px;
      max-width: 272px;
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
`;
