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
import {combineReducers, createStore} from 'redux';
import homeReducer from './reducers/HomeReducer';

//Create Store
const store = createStore(combineReducers({homeReducer}));

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};

export default App;
