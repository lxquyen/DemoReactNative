import React from 'react';
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native';

export default class AddScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.getParam('title', 'Add'),
            headerRight: (
                <Button
                    title={'Done'}
                    onPress={navigation.getParam('onSave')}/>
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.props.navigation.setParams({onSave: this._onSave});
    }

    _onSave = () => {
        const {name} = this.state;

        if (!name) {
            Alert.alert('Tên không được để trống...');
            return;
        }
        const {onAddTask, onEditTask} = this.props;
        onAddTask({name: name, status: false});
        this.props.navigation.goBack();

    };

    _onChangeText = (text) => {
        this.setState({
            name: text,
        });
    };

    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    value={`${this.state.name}`}
                    returnKeyType={'done'}
                    underlineColorAndroid={'transparent'}
                    style={styles.input}
                    placeholder={'Name'}
                    onChangeText={this._onChangeText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'flex-start',
    },
    input: {
        flex: 1,
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
    },
});
