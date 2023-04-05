import CustomAPIError from "./error-class";
import {StatusCodes} from "http-status-codes"

class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthorizedError;