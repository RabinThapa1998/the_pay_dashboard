"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadReqError = void 0;
const common_error_1 = require("./common-error");
class BadReqError extends common_error_1.CommonError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 400;
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, BadReqError.prototype);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
exports.BadReqError = BadReqError;
