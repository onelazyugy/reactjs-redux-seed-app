import {HOME} from './types';

export function storeHomeInfo(homeInfo) {
    console.log('home action');
    return {
        type: HOME,
        payload: homeInfo
    }
};
