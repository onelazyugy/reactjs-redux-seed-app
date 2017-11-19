import {ABOUT} from '../actions/types';
import initialState from './initialState';

export const storeAboutInfoReducer = (state = initialState, action) => {
    console.log('home reducer');
    switch (action.type) {
        case ABOUT:
            return action.payload;
        default:
            return state;
    }
};