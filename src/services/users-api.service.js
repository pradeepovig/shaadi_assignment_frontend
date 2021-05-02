import axios from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_RANDOM_USER_BASE_URL,
    timeout: 900000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/pdf'
    }
});

export function cancelAPICall(message = 'API call is being cancelled') {
    source.cancel(message);
}

export function getRandomUsers() {
    return axiosInstance.get('/api/', { cancelToken: source.token});
}
