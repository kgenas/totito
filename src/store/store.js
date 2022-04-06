
import { createStore, combineReducers } from 'redux';
import { gameReducer } from '../reducers/gameReducer';

const reducers = combineReducers({
    GameTotito:gameReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    reducers,
    composeEnhancers
);
