export interface BaseResponse<T> {
    status: number;
    message: string;
    data: T;
}

export interface BaseVoidResponse {
    status: number;
    message: string;
}