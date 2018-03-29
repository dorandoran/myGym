import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
    LIKE_GYM,
    CLEAR_LIKED_GYMS
} from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.likedGyms || [];
        case LIKE_GYM:
            return _.uniqBy([
                action.payload, ...state
            ], 'place_id');
        case CLEAR_LIKED_GYMS:
            return [];
        default: 
            return state;
    }
}