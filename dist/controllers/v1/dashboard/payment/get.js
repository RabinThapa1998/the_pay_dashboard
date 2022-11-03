"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentsHandler = void 0;
const payment_1 = require("../../../../models/payment");
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const getPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield payment_1.Payment.find();
        if (!payment) {
            throw new bad_request_error_1.BadRequestError("Payments empty");
        }
        return res.status(200).json({ data: payment });
    }
    catch (err) {
        throw new bad_request_error_1.BadRequestError(err.message
            ? err.message
            : "Failed to get Payments. Debug Backend!");
    }
});
exports.getPaymentsHandler = getPayments;
