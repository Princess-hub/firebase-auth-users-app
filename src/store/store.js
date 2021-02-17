import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {getFirebase, reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {getFirestore, reduxFirestore, firestoreReducer} from 'redux-firestore';
// import firebaseReducer from 'react-redux-firebase';
import usersReducer from '../reducers/usersReducer';
import authReducer from '../reducers/authReducer';
import firebase from '../firebase/firebase'

const reducers = combineReducers({
    usersState: usersReducer,
    auth: authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})
export const store = createStore(
    reducers, 
    compose(
         applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase),
    )
);