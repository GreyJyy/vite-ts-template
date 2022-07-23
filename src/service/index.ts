import JyRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/request/config'

const jyRequest = new JyRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor(config) {
            return config
        },
        requestInterceptorCatch(error) {
            return error
        },
        responseInterceptor(res) {
            return res
        },
        responseInterceptorCatch(error) {
            return error
        }
    }
})

export { jyRequest }
