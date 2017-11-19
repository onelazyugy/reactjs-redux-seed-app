import {ABOUT} from './types';

export function storeAboutInfo(aboutInfo) {
    console.log('about action');
    return {
        type: ABOUT,
        payload: aboutInfo
    }
};
