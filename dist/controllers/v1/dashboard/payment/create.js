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
exports.createPaymentHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const payment_1 = require("../../../../models/payment");
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { payment_type, amount, vote } = req.body;
        const payment = payment_1.Payment.build({
            payments: [payment_type, amount, vote],
        });
        yield payment.save();
        if (!payment) {
            throw new bad_request_error_1.BadRequestError("Payment not created");
        }
        return res.status(201).json({ data: payment });
    }
    catch (error) {
        throw new bad_request_error_1.BadRequestError(error.message
            ? error.message
            : "Failed to create Contestent. Debug Backend!");
    }
});
exports.createPaymentHandler = createPayment;
