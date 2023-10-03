import { ApiError } from "./api.error";

export class ApiResponse<T> extends Response {
    constructor(
        public payload: T,
        public errors: Array<ApiError>
    ) {
        super();
    }

    public static forSuccess<T>(payload: T, errors: Array<ApiError> = []): ApiResponse<T> {
        return new ApiResponse(payload, errors);
    }

    public static forFailure(errors: Array<ApiError>) {
        return new ApiResponse(null, errors);
    }
}
