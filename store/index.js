import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../src/reducers';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

persistStore(store, { storage: AsyncStorage, whitelist: ['likedGyms'] })
//add .purge() to end of persistStore to clear Async in testing environment

export default store;