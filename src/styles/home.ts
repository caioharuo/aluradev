import styled from 'styled-components';

export const Container = styled.div`
  section {
    main {
      display: flex;
      justify-content: flex-end;

      @media (max-width: 1440px) {
        & {
          flex-direction: column;
        }
      }
    }
  }
`;
