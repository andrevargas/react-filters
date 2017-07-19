import uuid from 'uuid';
import {
    ADD_FILTER,
    REMOVE_FILTER,
    UPDATE_FILTER
} from '../constants/actionTypes';

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
