enum Api {
    login = '/user/login/auth',
    getCurrentUserApi = '/user/profile/token',
}

export function loginApi(params: { email: string, password: string }) {
    return useHttp.post<string>(Api.login, params)
}

export function getCurrentUserApi() {
    return useHttp.get<any>(Api.getCurrentUserApi)
}