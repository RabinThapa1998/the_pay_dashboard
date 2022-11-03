"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const custom_error_1 = require("./custom-error");
class ForbiddenError extends custom_error_1.CustomError {
    constructor() {
        super('Access Forbidden');
        this.statusCode = 403;
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Access Forbidden' }];
    }
}
exports.ForbiddenError = ForbiddenError;
