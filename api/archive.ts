enum Api {
    test = '/test',
}

export function testApi() {
    return useHttp.get<number>(Api.test)
}

export function testSSRApi() {
    return useAsyncData('/blog/test', testApi);
}