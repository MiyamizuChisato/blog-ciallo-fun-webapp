export interface Result<T> {
    message: string
    code: number
    payload: T
}