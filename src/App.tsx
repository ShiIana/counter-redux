import {useState} from 'react';
import {Button} from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
import {StyledCard, StyledRow, StyledSeparator} from "./components/Card/style";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {changeMaxValueAC, changeMinValueAC, incrementAC, resetAC} from "./reducers/reducer";

const App = () => {
    const counterMin = useSelector<AppStateType, number>(state => state.counter.counterMin);
    const counterMax = useSelector<AppStateType, number>(state => state.counter.counterMax);
    const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue);

    const [startValue, setStartValue] = useState(counterMin);
    const [maxValue, setMaxValue] = useState(counterMax);
    const [valueIsSetted,setValueIsSetted] = useState(true);

    const dispatch = useDispatch();

    const incrementCounter = () => dispatch(incrementAC());
    const resetCounter = () => dispatch(resetAC());
    const changeStartValue = (value: number) => {
        setValueIsSetted(false);
        setStartValue(value);
    }
    const changeMaxValue = (value: number) =>{
        setValueIsSetted(false);
        setMaxValue(value);
    }

    const saveToStorage = () => {
        dispatch(changeMinValueAC(startValue));
        dispatch(changeMaxValueAC(maxValue));
        setValueIsSetted(true)
    }

    return (
        <div className="App">
            <StyledCard>
                <div>
                    <Label>Max value:</Label>
                    <Input
                        error={startValue >= maxValue || maxValue < 0}
                        value={maxValue}
                        callback={changeMaxValue}
                    />
                </div>
                <div>
                    <Label>Start value:</Label>
                    <Input
                        error={startValue >= maxValue || startValue < 0}
                        value={startValue}
                        callback={changeStartValue}
                    />
                </div>

                <StyledSeparator/>

                <Button
                    callback={saveToStorage}
                    isDisabled={valueIsSetted}
                >
                    Set
                </Button>
            </StyledCard>

            <StyledCard>
                <Counter
                    valueIsSetted={valueIsSetted}
                    counter={counterValue}
                    startValue={startValue}
                    maxValue={maxValue}
                    counterMin={counterMin}
                    counterMax={counterMax}
                />

                <StyledSeparator/>

                <StyledRow>
                    <Button
                        callback={incrementCounter}
                        isDisabled={counterValue >= counterMax || (startValue !== counterMin || maxValue !== counterMax)}
                    >
                        Inc
                    </Button>
                    <Button
                        callback={resetCounter}
                        isDisabled={counterValue === counterMin || (startValue !== counterMin || maxValue !== counterMax)}
                    >
                        Reset
                    </Button>
                </StyledRow>
            </StyledCard>

            <div className="pic"></div>
            <div className="pic2"></div>
        </div>
    );
}

export default App;
