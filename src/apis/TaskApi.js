import axiosService from '../common/AxiosService';

function* getTaskFromApi() {
    return yield axiosService.get('Task');
}

function* insertNewTaskFromApi(newTask) {
    return yield axiosService.post('Task', newTask);
}

export const TaskApi = {
    getTaskFromApi,
    insertNewTaskFromApi,
};
