import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 10px;
  border: 3px solid #3355aa;
  padding: 25px;
  transform: rotate(-1deg);
  max-width: 400px;
  width: 100%;
  display: grid;
  gap: 30px;
  min-height: 200px;
  
  * {
    transform: rotate(1deg);
  }
`

export const StyledSeparator = styled.div`
  border-bottom: 2px solid #3355aa;
  transform: rotate(2deg);
`

export const StyledRow = styled.div`
  display: flex;
  gap: 30px;
`