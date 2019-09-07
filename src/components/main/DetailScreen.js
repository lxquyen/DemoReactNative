import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class DetailScreen extends React.Component {
    static navigationOptions = {
        title: 'DetailScreen',
    };

    _onGoBack = () => {
        this.props.navigation.goBack();
    };

    _onGoToDetail = () => {
        this.props.navigation.push('Detail');
    };

    render() {
        console.log('render DetailScreen');
        return (
            <View style={styles.container}>
                <Button title={'Go Back'} onPress={() => this._onGoBack()}/>

                <Button title={'Go To Detail... again'} onPress={() => this._onGoToDetail()}/>

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
