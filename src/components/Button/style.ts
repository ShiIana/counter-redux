import styled from 'styled-components';

export const StyledButton = styled.button`
  font: inherit;
  color: #3355aa;
  border: 2px solid #3355aa;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  min-width: 150px;
  transition: all 0.3s;
  user-select: none;
  
  &:hover {
    color: #4169e1;
    border-color: #4169e1;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`