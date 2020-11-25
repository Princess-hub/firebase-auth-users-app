import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/usersReducer';
import authReducer from '../reducers/authReducer';

export const store = createStore(combineReducers({
    userState: usersReducer,
    auth: authReducer
}));