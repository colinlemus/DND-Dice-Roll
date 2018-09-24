import { combineReducers } from 'redux';
import rollReducer from './rollReducer';

export default combineReducers({
    rolls: rollReducer
});