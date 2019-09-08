/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppContainer from './navigators/AppNavigator';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeReducer from './reducers/HomeReducer';
import rootSaga from './sagas/RootSaga';

//Middleware
const sagaMiddleware = createSagaMiddleware();
//Create Store
const store = createStore(combineReducers({homeReducer}), applyMiddleware(sagaMiddleware));

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};

sagaMiddleware.run(rootSaga);
export default App;
