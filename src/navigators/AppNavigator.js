import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import HomeScreen from '../components/main/HomeScreen';
import DetailScreen from '../components/main/DetailScreen';
import SettingScreen from '../components/main/SettingScreen';
import SplashScreen from '../components/splash/SplashScreen';

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
        screen: HomeScreen,
    },
    Detail: {
        screen: DetailScreen,
    },
});

const SettingStack = createStackNavigator({
    Setting: {
        screen: SettingScreen,
    },
});


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
    },
    Setting: {
        screen: SettingStack,
    },
});

const SwitchNavigator = createSwitchNavigator({
    Splash: {
        screen: SplashStack,
    },
    Auth: {
        screen: AuthStack,
    },
    Tab: {
        screen: TabNavigator,
    },
}, {
    initialRouteName: 'Splash',
});

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
