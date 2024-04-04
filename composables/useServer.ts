import type {Result} from "~/types/Result";
import {useToast} from "vue-toastification";

const http = $fetch.create({
    baseURL: "/blog",
    onRequest({request, options}) {
        options.headers = new Headers(options.headers)
        if (process.client) {
            const token = localStorage.getItem("token")
            if (token !== null && token.trim().length > 0) {
                options.headers.set('token', token)
            }
        }
    },
    onResponse({response}) {
        if (response._data.code < 0) {
            useToast().error(response._data.message)
            return Promise.reject(response._data)
        }
    },
    async onResponseError() {
        await useRouter().push('/error')
    }
})

export const useHttp = {
    get: <T>(url: string, params?: any) => {
        return http<Result<T>>(url, {method: 'GET', params})
    },
    post: <T>(url: string, body?: any) => {
        return http<Result<T>>(url, {method: 'POST', body})
    },
    put: <T>(url: string, body?: any) => {
        return http<Result<T>>(url, {method: 'PUT', body})
    },
    delete: <T>(url: string, body?: any) => {
        return http<Result<T>>(url, {method: 'DELETE', body})
    }
}