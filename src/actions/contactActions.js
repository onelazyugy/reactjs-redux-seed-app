import {CONTACT} from './types';

export function storeContactInfo(contactInfo) {
    console.log('about action');
    return {
        type: CONTACT,
        payload: contactInfo
    }
};
