import {call, all, fork} from 'redux-saga/effects';
import {watchAddNewTask, watchFetchTasks} from './TaskSagas';

export default function* rootSaga() {
    yield all([
        watchFetchTasks(),
        watchAddNewTask(),
    ]);
}
