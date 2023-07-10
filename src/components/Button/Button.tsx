import {StyledButton} from "./style";

type ButtonPropsType = {
  isDisabled: boolean
  callback: () => void
  children: string
}
export const Button = ({isDisabled, callback, children}: ButtonPropsType) => {
  const onClickHandler = () => callback();

  return (
    <StyledButton
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
};