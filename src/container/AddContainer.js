import {connect} from 'react-redux';
import AddScreen from '../components/main/AddScreen';
import {addTaskAction, editTaskAction} from '../action';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (task) => dispatch(addTaskAction(task)),
        onEditTask: (task) => dispatch(editTaskAction(task)),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps,
)(AddScreen);
