import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducer/index';
import ReduxThunk from 'redux-thunk';

export const store = createStore(
    Reducers,
    {},
    applyMiddleware(ReduxThunk)
)