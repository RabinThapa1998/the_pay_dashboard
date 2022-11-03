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
exports.getOnePaymentHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const payment_1 = require("../../../../models/payment");
const getOnePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const _payment = yield payment_1.Payment.findById({ _id: id });
        if (!_payment) {
            throw new bad_request_error_1.BadRequestError("payment not found");
        }
        res.status(200).json({ data: _payment });
    }
    catch (err) {
        throw new bad_request_error_1.BadRequestError(err.message || "Failed Backend, unable to get one payment");
    }
});
exports.getOnePaymentHandler = getOnePayment;
