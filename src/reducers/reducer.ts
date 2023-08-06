const initialState = {
    counterMin: 0,
    counterMax: 5,
    counterValue: 0
}

type actionType = ReturnType<typeof incrementAC> |
                  ReturnType<typeof resetAC> |
                  ReturnType<typeof changeMinValueAC> |
                  ReturnType<typeof changeMaxValueAC>

export type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {...state, counterValue: state.counterValue + 1}
        case 'RESET_COUNTER':
            return {...state, counterValue: state.counterMin}
        case 'CHANGE_MIN_VALUE':
            return {...state, counterMin: action.payload}
        case 'CHANGE_MAX_VALUE':
            return {...state, counterMax: action.payload}

        default: return state;
    }
}

export const incrementAC = () => {
    return {
        type: 'INC_COUNTER',
    } as const
}

export const resetAC = () => {
    return {
        type: 'RESET_COUNTER',
    } as const
}

export const changeMinValueAC = (value: number) => {
    return {
        type: 'CHANGE_MIN_VALUE',
        payload: value
    } as const
}

export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: value
    } as const
}
