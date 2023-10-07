import { ApiError } from "./api.error";

export class ApiResponse<T>  {
    constructor(
        public payload: T | null,
        public errors: Array<ApiError>
    ) {
    }

    public static forSuccess<T>(payload: T, errors: Array<ApiError> = []): ApiResponse<T> {
        return new ApiResponse(payload, errors);
    }

    public static forFailure(errors: Array<ApiError>) {
        return new ApiResponse(null, errors);
    }

    public static fromError(error: Error) {
        return new ApiResponse(null, [new ApiError(error.name, error.message)]);
    }
}
