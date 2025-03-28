import axios from 'axios';
import { API_BASE_URL } from '../config/api'

export const request = (
    endpoint, params, type, onSuccess, onError, onFinally
) => {
    const reqUrl = API_BASE_URL + endpoint
    if(type === 'get') {
        axios.get(reqUrl, {...params})
            .then((res) => onSuccess && onSuccess(res))
            .catch((err) => onError && onError(err))
            .finally(() => onFinally && onFinally())
    }
    if(type === 'post') {
        axios.post(reqUrl, {...params})
            .then((res) => onSuccess && onSuccess(res))
            .catch((err) => onError && onError(err))
            .finally(() => onFinally && onFinally())
    }
    if(type === 'patch') {
        axios.patch(reqUrl, {...params})
        .then((res) => onSuccess && onSuccess(res))
        .catch((err) => onError && onError(err))
        .finally(() => onFinally && onFinally())
    }
}