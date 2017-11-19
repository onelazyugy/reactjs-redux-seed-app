import { combineReducers } from 'redux';
import { storeHomeInfoReducer } from './homeReducer';
import { storeAboutInfoReducer } from './aboutReducer';
import { storeContactInfoReducer } from './contactReducer';

export default combineReducers({
    storeHomeInfoReducer,
    storeAboutInfoReducer,
    storeContactInfoReducer
});