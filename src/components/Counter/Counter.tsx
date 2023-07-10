import {StyledCounter, StyledError, StyledInfo} from "./style";
import {StyledArrow} from "../Images/images";
import iconArrow from './../../assets/arrow.svg'

type CounterPropsType = {
    counter: number
    startValue: number
    maxValue: number
    counterMin: number
    counterMax: number
    valueIsSetted: boolean
}
const Counter = ({counter, startValue, maxValue, valueIsSetted}: CounterPropsType) => {
    if ((startValue < 0)  || (startValue >= maxValue)) {
        return <StyledError>Incorrect value!</StyledError>
    } else if (!valueIsSetted) {
        return (
            <>
                <StyledArrow src={iconArrow}/>
                <StyledInfo>Enter values and press "Set"</StyledInfo>
            </>
        )
    } else {
        return <StyledCounter $error={counter === maxValue}>{counter}</StyledCounter>
    }
};

export default Counter;