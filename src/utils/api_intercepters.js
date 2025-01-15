import axios from 'axios'

const Http = axios.create({
    baseURL: 'http://127.0.0.1:3004',
    headers: {
        'Content-Type': 'application/json'
    }
})

Http.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

Http.interceptors.response.use(
    response => {
        if (response.data.statusCode === 401 && response.data.message === 'Invalid Token') {
            window.location.href = '/login'
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export const useHttp = () => {
    const get = async (url, options = {}) => {
        try {
            const response = await Http.get(url, options)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const post = async (url, data, options = {}) => {
        try {
            const response = await Http.post(url, data, options)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const put = async (url, data, options = {}) => {
        try {
            const response = await Http.put(url, data, options)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const del = async (url, options = {}) => {
        try {
            const response = await Http.delete(url, options)
            return response.data
        } catch (error) {
            throw error
        }
    }

    return { get, post, put, del }
}
