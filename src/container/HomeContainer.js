import {connect} from 'react-redux';
import HomeScreen from '../components/main/HomeScreen';
import {deleteAction, finishAction} from '../action/HomeAction';
import {fetchTaskAction} from '../action';

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchTask: () => dispatch(fetchTaskAction()),
        onFinishedItem: (index) => dispatch(finishAction(index)),
        onDeleteItem: (index) => dispatch(deleteAction(index)),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps,
)(HomeScreen);
