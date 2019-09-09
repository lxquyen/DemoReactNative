import {ADD_TASK, FETCH_TASK_ERROR, FETCH_TASK_SUCCESS} from '../action/ActionTypes';

const taskReducers = (tasks = [], action) => {
    switch (action.type) {
        case FETCH_TASK_SUCCESS:
            return action.receivedTasks;
        case FETCH_TASK_ERROR:
            return [];
        // case ADD_TASK:
        //     return [
        //         ...tasks,
        //         action.newTask,
        //     ];
        default:
            return tasks;
    }
};

export default taskReducers;
