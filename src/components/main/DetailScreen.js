import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class DetailScreen extends React.Component {
    UNSAFE_componentWillMount(): void {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
