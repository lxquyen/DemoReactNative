import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Home',
            headerRight: (
                <Button
                    title={'Add'}
                    onPress={navigation.getParam('onGoToAddScreen')}/>
            ),
        };
    };

    _onGoToAddScreen = (item) => {
        this.props.navigation.navigate('Add');
    };

    componentDidMount() {
        this.props.onFetchTask();
        this.props.navigation.setParams({onGoToAddScreen: this._onGoToAddScreen});
    }

    FlatListItemSeparator = () => <View style={styles.line}/>;

    render() {
        const {tasks} = this.props;
        return (
            <FlatList
                style={{padding: 10}}
                data={tasks}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                extraData={this.props}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}/>
        );
    }

    renderItem = ({item, index}) => {
        const {onFinishedItem, onDeleteItem} = this.props;
        return (
            <TouchableOpacity onPress={() => this._onGoToAddScreen(item)}>
                <View style={styles.itemContainer}>
                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity style={{marginTop: -2, marginEnd: 10}} onPress={() => onFinishedItem(index)}>
                            <Text>{item.status ? `✅` : `⏰`}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}>
                        <Text style={{color: 'black'}}>{item.name}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity style={{marginTop: -2}} onPress={() => onDeleteItem(index)}>
                            <Text>{`❌`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        ...ApplicationStyles.screen.container,
    },
    line: {
        marginTop: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        borderColor: 'gray',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elevation: 2,
    },
});
