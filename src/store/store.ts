import {createStore, combineReducers, applyMiddleware} from "redux";
import {counterReducer} from "../reducers/reducer";
import {loadState, saveState} from "../utils/localStorage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));
export type AppStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
});