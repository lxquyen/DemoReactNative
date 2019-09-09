import {
    ADD_TASK,
    DELETE_TASK, DELETE_TASK_SUCCESS,
    EDIT_TASK, EDIT_TASK_SUCCESS,
    FETCH_TASK,
    FETCH_TASK_ERROR,
    FETCH_TASK_SUCCESS,
    FINISH_TASK, FINISH_TASK_SUCCESS
} from "./ActionTypes";

export const fetchTaskAction = () => {
    return {
        type: FETCH_TASK
    }
};

export const addTaskAction = (newTask) => {
    return {
        type: ADD_TASK,
        newTask
    }
};

export const finishTaskAction = (task) => {
    return {
        type: FINISH_TASK,
        task
    }
};

export const deleteTaskAction = (task) => {
    return {
        type: DELETE_TASK,
        task
    }
};

export const editTaskAction = (task) => {
    return {
        type: EDIT_TASK,
        task
    }
};

export const fetchTaskSuccessAction = (receivedTasks) => {
    return {
        type: FETCH_TASK_SUCCESS,
        receivedTasks
    }
};

export const fetchTaskErrorAction = (error) => {
    return {
        type: FETCH_TASK_ERROR,
        error
    }
};

export const finishTaskSuccessAction = (task) => {
    return {
        type: FINISH_TASK_SUCCESS,
        task
    }
};

export const deleteTaskSuccessAction = (task) => {
    return {
        type: DELETE_TASK_SUCCESS,
        task
    }
};

export const editTaskSuccessAction = (task) => {
    return {
        type: EDIT_TASK_SUCCESS,
        task
    }
};
