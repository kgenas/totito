
import { createStore, combineReducers } from 'redux';
import { game } from '../reducers/gameReducer';

const reducers = combineReducers({
    Game:game
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    reducers,
    composeEnhancers
);
