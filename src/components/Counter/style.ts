import styled from 'styled-components';

type CounterPropsType = {
    $error: boolean;
}

export const StyledCounter = styled.div<CounterPropsType>`
  color: ${props => props.$error ? 'red' : '#3355aa'};
  font-size: 55px;
  text-align: center;
  user-select: none;
`

export const StyledError = styled.div`
  color: red;
`

export const StyledInfo = styled.div`
  color: #4169e1;
  font-size: 25px;
`