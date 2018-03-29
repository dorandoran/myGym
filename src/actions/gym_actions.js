import axios from 'axios';
import qs from 'qs';
import { Actions } from 'react-native-router-flux';

import {
    FETCH_GYMS,
    LIKE_GYM,
    CLEAR_LIKED_GYMS
} from './types';

const GYM_ROOT_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
const GYM_QUERY_PARAMS = {
    radius: 15000,
    type: 'gym',
    key: '[INSERT GOOGLE PLACES API KEY]',
};

const buildLocation = ({ latitude, longitude }) => {
    return `location=${latitude},${longitude}&`;
};

const buildBarUrl = (location) => {
    const query = qs.stringify({ ...GYM_QUERY_PARAMS })
    return `${GYM_ROOT_URL}${location}${query}`;
};

export const fetchGyms = (region) => async (dispatch) => {
    let location = buildLocation(region);
    const url = buildBarUrl(location);

    try {
        let { data } = await axios.get(url);
        dispatch({ type: FETCH_GYMS, payload: data });
        Actions.deckscreen();
    } catch(e) {
        console.error(e);
    }
};

export const likeGym = (gym) => {
    return {
        payload: gym,
        type: LIKE_GYM
    };
};

export const clearLikedGyms = () => {
    return { type: CLEAR_LIKED_GYMS };
};