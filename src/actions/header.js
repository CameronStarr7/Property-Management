import { SET_HEADER_TITLES, UPDATE_HEADER } from './types';

export function updateHeader(title, subtitle, hideBar) {
    return { 
        type: UPDATE_HEADER,
        payload: {title, subtitle, hideBar }
    }
}