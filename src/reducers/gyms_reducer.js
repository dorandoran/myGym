import {
    FETCH_GYMS
} from '../actions/types';

const INITIAL_STATE = {
    results: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_GYMS: 
            return action.payload;
        default:
            return state;
    }
}