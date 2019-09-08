import axios from 'axios';

class AxiosService {
    constructor(props) {
        this.instance = axios.create({
            baseURL: 'http://5cef377a1c2baf00142cc649.mockapi.io/api/',
            timeout: 3000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
    }

    handleSuccess(response) {
        console.log('handleSuccess: ', response);
        return response;
    }

    handleError(error) {
        console.log('handleError: ', error);
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url);
    }

}

const axiosService = new AxiosService();
export default axiosService;
