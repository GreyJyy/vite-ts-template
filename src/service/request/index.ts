import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import type { AxiosInstance } from 'axios'
import type { JyRequestConfig, JyRequestHookPartial } from '@/service/request/types'

const DEFAULT_LOADING = true //default show loading style

class JyRequest {
    instance: AxiosInstance
    interceptors?: JyRequestHookPartial
    hasLoading?: boolean
    constructor(config: JyRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.hasLoading = config.hasLoading ?? DEFAULT_LOADING //default true

        //global instance interceptors
        this.instance.interceptors.request.use(
            config => {
                this.hasLoading && Nprogress.start()
                return config
            },
            error => {
                return error
            }
        )
        this.instance.interceptors.response.use(
            res => {
                this.hasLoading && Nprogress.done()
                return res.data
            },
            error => {
                this.hasLoading && Nprogress.done()
                return error
            }
        )

        //local instance interceptors
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )
    }

    //certain request interceptors
    request<T>(config: JyRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }
            if (config.hasLoading === false) this.hasLoading = config.hasLoading //close loading style
            this.instance
                .request<any, T>(config)
                .then(res => {
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors.responseInterceptor(res)
                    }
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                    return error
                })
                .finally(() => (this.hasLoading = DEFAULT_LOADING)) //reset loading style
        })
    }

    get<T>(config: JyRequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'get'
        })
    }
    post<T>(config: JyRequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'post'
        })
    }
    put<T>(config: JyRequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'put'
        })
    }
    patch<T>(config: JyRequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'patch'
        })
    }
    delete<T>(config: JyRequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'delete'
        })
    }
}
export default JyRequest
