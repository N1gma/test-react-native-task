import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loginReducer from '../Containers/Login/reducer';
import feedReducer from '../Containers/Feed/reducer';
import navigatorReducer from './navigator';
import commonReducer from './commonReducer';

const store = createStore(combineReducers({
        loginReducer,
        feedReducer,
        navigatorReducer,
        commonReducer
    }),
    applyMiddleware(thunk)
);

export default store;