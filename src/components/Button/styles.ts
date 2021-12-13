import styled from 'styled-components';

interface ButtonProps {
  isOutline: boolean;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  padding: 1rem 0;
  border: none;
  border-radius: 0.5rem;
  color: ${({ isOutline }) => (isOutline ? '#FFFFFF' : '#051D3B')};
  outline: none;

  font-size: 1rem;

  background-color: ${({ isOutline }) => (isOutline ? '#5081FB14' : '#5081FB')};

  transition: background 0.2s;

  &:hover {
    background-color: ${({ isOutline }) =>
      isOutline ? '#5081FB29' : '#7ba4fc'};
  }

  &:active {
    background-color: ${({ isOutline }) =>
      isOutline ? '#5081FB29' : '#7ba4fc'};
    border: 4px solid
      ${({ isOutline }) =>
        isOutline ? 'rgba(80, 129, 251, 0.24)' : 'rgba(80, 129, 251, 0.72)'};
  }

  &:focus {
    background-color: ${({ isOutline }) =>
      isOutline ? '#5081fb3d' : '#96B9FD'};
  }
`;
