import uuid from 'uuid';

// Actions
const ADD_FILTER = '@@filters/ADD_FILTER';
const REMOVE_FILTER = '@@filters/REMOVE_FILTER';
const UPDATE_FILTER = '@@filters/UPDATE_FILTER';

// Action Creators
export function addFilter(payload) {
    return {
        type: ADD_FILTER,
        payload: { id: uuid(), ...payload }
    };
}

export function removeFilter(payload) {
    return { type: REMOVE_FILTER, payload };
}

export function updateFilter(payload) {
    return { type: UPDATE_FILTER, payload };
}

// Reducer
export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_FILTER:
            return [...state, action.payload];
        case REMOVE_FILTER:
            return state.filter(item => item.id !== action.payload.id);
        case UPDATE_FILTER:
            return state.map(item =>
                item.id === action.payload.id
                ? { ...item, ...action.payload }
                : item
            );
        default:
            return state;
    }
}
