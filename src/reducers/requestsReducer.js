import {
    CHANGE_SELECTED_REQUEST_TYPE
} from '../actions/types';

const INITIAL_STATE = {
    requests: [],
    selectedRequests: 'pending'
}


export default function(state = INITIAL_STATE, action) {
    switch (action, type) {
        case AUTHENTICATE_USER:
            const boxType = action.payload;
            return {
                ...state,
                selectedRequests: boxType
            }

        default: return state;
    }
}