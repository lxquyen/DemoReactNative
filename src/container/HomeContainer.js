import {connect} from 'react-redux';
import HomeScreen from '../components/main/HomeScreen';
import {deleteAction, finishAction} from '../action/HomeAction';

const mapStateToProps = (state) => {
    return {
        data: state.homeReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFinishedItem: (index) => dispatch(finishAction(index)),
        onDeleteItem: (index) => dispatch(deleteAction(index)),
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps,
)(HomeScreen);
