import { combineReducers } from 'redux';
import auth from './auth_reducer';
import gyms from './gyms_reducer';
import likedGyms from './likes_reducer';

export default combineReducers({
    auth, gyms, likedGyms
});