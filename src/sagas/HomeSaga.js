import {takeEvery} from 'redux-saga/effects';
import {getListTask, TaskApi} from '../apis/TaskApi';

export function* watchAddAction() {
    yield takeEvery('ADD', add);
}

function* add() {
    console.log('-----> saga : Add');

    try {
        const receivedTask = yield TaskApi.getTaskFromApi();
        console.log('------> success: ', receivedTask);
    } catch (error) {
        console.log('------> error:', error);
    }
}
