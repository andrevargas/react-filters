import {
    ADD_FILTER,
    REMOVE_FILTER,
    UPDATE_FILTER
} from '../constants/actionTypes';

const initialState = [];

export default function filters(state = initialState, action) {
    switch (action.type) {
        case ADD_FILTER:
            return [...state, action.payload];
        case REMOVE_FILTER:
            return state.filter(item => item.id !== action.payload);
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
