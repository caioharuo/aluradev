import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  padding-top: 0;

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
