import {
    CACHE_PORTCALLS,
    CACHE_UPDATE,
    CACHE_CLEAR,
    CACHE_CHANGE_LIMIT,
    CACHE_APPENDING_PORTCALLS
} from '../actions/types';

const INITIAL_STATE = {
    portCalls: [],
    lastUpdated: 0,
    limit: 100,
    appendingPortCalls: false,
}

const cacheReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CACHE_PORTCALLS:
            return {...state, portCalls: action.payload, appendingPortCalls: false};
        case CACHE_UPDATE:
            return { ...state, lastUpdated: action.payload };
        case CACHE_CLEAR:
            return INITIAL_STATE;
        case CACHE_CHANGE_LIMIT:
            return { ...state, limit: action.payload };
        case CACHE_APPENDING_PORTCALLS:
            return { ...state, appendingPortCalls: true}
        default:
            return state;
    }
}

export default cacheReducer;