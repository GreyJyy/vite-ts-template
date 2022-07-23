import type { AxiosRequestConfig, AxiosResponse } from 'axios'
interface JyRequestHook<T = AxiosResponse> {
    requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch: (error: any) => any
    responseInterceptor: (res: T) => T
    responseInterceptorCatch: (error: any) => any
}

type JyRequestHookPartial<T = AxiosResponse> = Partial<JyRequestHook<T>>

interface JyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: JyRequestHookPartial<T>
    hasLoading?: boolean
}

export type { JyRequestConfig, JyRequestHookPartial }
