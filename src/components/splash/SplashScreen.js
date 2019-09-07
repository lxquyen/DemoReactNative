import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('Auth');
        }, 3000);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>SplashScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
    },
});
