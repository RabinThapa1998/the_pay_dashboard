"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonError = void 0;
class CommonError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, CommonError.prototype);
    }
}
exports.CommonError = CommonError;
