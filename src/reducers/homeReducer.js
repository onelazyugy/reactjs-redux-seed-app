import {HOME} from '../actions/types';
import initialState from './initialState';

export const storeHomeInfoReducer = (state = initialState, action) => {
    console.log('home reducer');
    switch (action.type) {
        case HOME:
            return action.payload;
        default:
            return state;
    }
};