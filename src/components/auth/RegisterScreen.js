import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class RegisterScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Register</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
    },
});
