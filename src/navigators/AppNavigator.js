import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import DetailScreen from '../components/main/DetailScreen';
import SettingScreen from '../components/main/SettingScreen';
import SplashScreen from '../components/splash/SplashScreen';
import React from 'react';
import AddScreen from '../components/main/AddScreen';
import HomeContainer from '../container/HomeContainer';
import AddContainer from '../container/AddContainer';

const SplashStack = createStackNavigator({
    Splash: {
        screen: SplashScreen,
    },
}, {
    headerMode: 'none',
});

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen,
    },
}, {
    initialRouteName: 'Login',
});

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeContainer,
    },
    Detail: {
        screen: DetailScreen,
    },
    Add: {
        screen: AddContainer,
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTitleContainerStyle: {
            fontWeight: 'bold',
        },
    },
    navigationOptions: {
        tabBarLabel: 'Home!',
    },
});

const SettingStack = createStackNavigator({
    Setting: {
        screen: SettingScreen,
    },
    Detail: {
        screen: DetailScreen,
    },
});


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
    },
    Setting: {
        screen: SettingStack,
    },
}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
    initialRouteName: 'Home',
});

const SwitchNavigator = createSwitchNavigator({
    Splash: {
        screen: SplashStack,
    },
    Auth: {
        screen: AuthStack,
    },
    Main: {
        screen: TabNavigator,
    },
}, {
    initialRouteName: 'Splash',
});

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
