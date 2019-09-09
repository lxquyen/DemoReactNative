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
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/RootSaga';
import allReducers from './reducers';

//Middleware
const sagaMiddleware = createSagaMiddleware();
//Create Store
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};

sagaMiddleware.run(rootSaga);
export default App;
