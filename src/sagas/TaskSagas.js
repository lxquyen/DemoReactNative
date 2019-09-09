import {put, takeEvery} from 'redux-saga/effects';
import {TaskApi} from '../apis/TaskApi';
import {fetchTaskAction, fetchTaskErrorAction, fetchTaskSuccessAction} from '../action';
import {ADD_TASK, FETCH_TASK} from '../action/ActionTypes';

function* fetchTasks() {
    try {
        const response = yield TaskApi.getTaskFromApi();
        yield put(fetchTaskSuccessAction(response.data));
    } catch (error) {
        yield put(fetchTaskErrorAction(error));
    }
}

export function* watchFetchTasks() {
    yield takeEvery(FETCH_TASK, fetchTasks);
}


function* addNewTask(action) {
    try {
        const response = yield TaskApi.insertNewTaskFromApi(action.newTask);
        if (response.status === 201) {
            yield put(fetchTaskAction());
        }
    } catch (error) {

    }
}

export function* watchAddNewTask() {
    yield takeEvery(ADD_TASK, addNewTask);
}
