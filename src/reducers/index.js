import {combineReducers} from 'redux';
import taskReducers from './TaskReducers';

const allReducers = combineReducers({
    taskReducers,
});

export default allReducers;
