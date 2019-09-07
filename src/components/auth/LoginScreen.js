import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class LoginScreen extends React.Component {
    _onBtnPress = (screen) => {
        this.props.navigation.navigate(screen);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>LoginScreen</Text>
                <Button title={'Register'} onPress={() => this._onBtnPress('Register')}/>
                <Button title={'Main'} onPress={() => this._onBtnPress('Tab')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
    },
});
