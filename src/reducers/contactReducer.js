import {CONTACT} from '../actions/types';
import initialState from './initialState';

export const storeContactInfoReducer = (state = initialState, action) => {
    console.log('home reducer');
    switch (action.type) {
        case CONTACT:
            return action.payload;
        default:
            return state;
    }
};