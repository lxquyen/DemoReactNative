import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

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
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        const index = navigation.getParam('index');
        this.state = {
            name: name === undefined ? '' : name,
            index: index === undefined ? -1 : index,
        };
        this.props.navigation.setParams({onSave: this._onSave});
    }

    _onSave = () => {
        const {onAdd, onEdit} = this.props;
        const {name, index} = this.state;
        if (index !== -1) {
            onEdit(name, index);
        } else {
            onAdd(name);
        }
        this.props.navigation.goBack();

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
                    onChangeText={text => this.setState({name: text})}
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
