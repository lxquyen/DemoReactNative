import {connect} from 'react-redux';
import {editSuccessAction} from '../action/HomeAction';
import AddScreen from '../components/main/AddScreen';
import {addAction} from '../action/AddAction';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (name) => dispatch(addAction(name)),
        onEdit: (name, index) => dispatch(editSuccessAction(name, index)),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps,
)(AddScreen);
