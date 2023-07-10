import {useState} from 'react';
import {Button} from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
import {StyledCard, StyledRow, StyledSeparator} from "./components/Card/style";
import './App.css';

const App = () => {
    const [counterMin, setCounterMin] = useState(Number(localStorage.getItem('min')) || 0);
    const [counterMax, setCounterMax] = useState(Number(localStorage.getItem('max')) || 5);
    const [startValue, setStartValue] = useState(counterMin);
    const [maxValue, setMaxValue] = useState(counterMax);
    const [counter, setCounter] = useState(counterMin);
    const [valueIsSetted,setvalueIsSetted] = useState(true);

    const incrementCounter = () => setCounter(prevState=> prevState + 1);
    const resetCounter = () => setCounter(counterMin);
    const changeStartValue = (value: number) => {
        setvalueIsSetted(false);
        setStartValue(value);
    }
    const changeMaxValue = (value: number) =>{
        setvalueIsSetted(false);
        setMaxValue(value);
    }

    const saveToStorage = () => {
        localStorage.setItem('min', String(startValue));
        localStorage.setItem('max', String(maxValue));
        setCounterMin(Number(localStorage.getItem('min')));
        setCounterMax(Number(localStorage.getItem('max')));
        setCounter(Number(localStorage.getItem('min')));
        setvalueIsSetted(true)
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
                    counter={counter}
                    startValue={startValue}
                    maxValue={maxValue}
                    counterMin={counterMin}
                    counterMax={counterMax}
                />

                <StyledSeparator/>

                <StyledRow>
                    <Button
                        callback={incrementCounter}
                        isDisabled={counter >= counterMax || (startValue !== counterMin || maxValue !== counterMax)}
                    >
                        Inc
                    </Button>
                    <Button
                        callback={resetCounter}
                        isDisabled={counter === counterMin || (startValue !== counterMin || maxValue !== counterMax)}
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
