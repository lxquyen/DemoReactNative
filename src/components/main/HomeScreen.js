import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class HomeScreen extends React.Component {
    UNSAFE_componentWillMount(): void {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
    },
});
