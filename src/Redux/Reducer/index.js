import { combineReducers } from 'redux';
import CharacterReducer from './CharacterReducer';

const Reducers = combineReducers({
    character: CharacterReducer
})

export default Reducers;