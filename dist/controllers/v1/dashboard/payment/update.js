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
exports.updatePaymentHandler = void 0;
const payment_1 = require("../../../../models/payment");
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const updatePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { vote, amount, payment_type } = req.body;
        const payment = yield payment_1.Payment.findById(id);
        if (!payment) {
            throw new bad_request_error_1.BadRequestError("Payment Not Found");
        }
        payment.payments.push({ vote, amount, payment_type });
        yield payment.save();
        res.status(200).json({ message: "Updated Successfully", data: payment });
    }
    catch (err) {
        throw new bad_request_error_1.BadRequestError(err.message || "Failed to update payment. Debug Backend!");
    }
});
exports.updatePaymentHandler = updatePayment;
