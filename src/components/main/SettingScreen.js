import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class SettingScreen extends React.Component {

    UNSAFE_componentWillMount(): void {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SettingScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
    },
});
