import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem 2.5rem 2rem;

  @media (max-width: 768px) {
    & {
      padding: 0 1rem 2.5rem 1rem;
    }
  }

  section {
    main {
      display: flex;
      justify-content: space-between;

      @media (max-width: 1440px) {
        & {
          flex-direction: column;
        }
      }
    }
  }
`;
