export type UUID = string;
export interface InternalError {
    response: {
        message: string;
    };
    status: number;
}
export interface APIResponse {
    response: unknown;
    status: number;
}
