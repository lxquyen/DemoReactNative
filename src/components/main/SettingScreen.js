import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class SettingScreen extends React.Component {

    _onBtnPress = () => {
        console.log('---> here');
        this.props.navigation.navigate('Detail');
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>SettingScreen</Text>
                <Button
                    style={{marginTop: 10}}
                    title={'Go to Detail'} onPress={() => this._onBtnPress()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
    },
});
