import {ChangeEvent} from 'react';
import {StyledInput} from "./style";

type InputPropsType = {
    error: boolean
    value: number
    callback: (value: number) => void
}

const Input = ({error, value, callback}: InputPropsType) => {
    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        callback(+evt.currentTarget.value);
    }

    return (
        <StyledInput $error={error} value={value} onChange={onChangeHandler} type="number" />
    );
};

export default Input;