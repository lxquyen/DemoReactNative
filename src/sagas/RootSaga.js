import {all} from 'redux-saga/effects';
import {watchAddAction} from './HomeSaga';

function* sayHell() {
    console.log('Hello world!');
}

export default function* rootSaga() {
    yield all([
        sayHell(),
        watchAddAction()]);
}
