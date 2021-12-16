import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 2rem 2.5rem 2rem;

  @media (max-width: 768px) {
    & {
      padding: 1rem 1rem 2.5rem 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1440px) {
    & {
      display: initial;
    }
  }
`;
