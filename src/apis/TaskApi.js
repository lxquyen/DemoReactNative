import axiosService from '../common/AxiosService';

function* fetTaskFromApi() {
    const response = yield fetch('http://5cef377a1c2baf00142cc649.mockapi.io/api/Task', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    console.log(response._bodyInit);
    return response;
}

function* getTaskFromApi() {
    const response = yield axiosService.get('Task');
    console.log('------>: ', response.data[0]);
    return response;
}

export const TaskApi = {
    fetTaskFromApi, getTaskFromApi,
};
