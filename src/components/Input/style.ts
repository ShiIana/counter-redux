import styled from 'styled-components';

export type Props = {
  $error: boolean
}

export const StyledInput = styled.input<Props>`
  font: inherit;
  font-size: 25px;
  padding: 0 10px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #3355aa;
  color: #3355aa;
  
  ${props => props.$error && `
    border-color: red;
    color: red;
    
    &:focus {
      outline-color: red;
    }
  `}
`