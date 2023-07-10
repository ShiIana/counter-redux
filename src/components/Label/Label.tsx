import {StyledLabel} from "./style";

type LabelPropsType = {
    children: string
}

const Label = ({children}: LabelPropsType) => {
    return (
        <StyledLabel>{children}</StyledLabel>
    );
};

export default Label;