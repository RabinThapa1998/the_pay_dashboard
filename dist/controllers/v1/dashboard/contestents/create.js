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
exports.createContestantHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const contestants_1 = require("../../../../models/contestants");
const payment_1 = require("../../../../models/payment");
const programs_1 = require("../../../../models/programs");
const createContestant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { full_name, age, address, program, phone, email } = req.body;
        const _program = yield programs_1.Program.findById(program);
        if (!_program) {
            return res.status(422).json({ message: "Program not found" });
        }
        const contestant = yield contestants_1.Contestant.findOne({ email });
        if (contestant) {
            throw new bad_request_error_1.BadRequestError("Contestant already exists");
        }
        //create payment for that contestant and assign the payment id to the contestant
        const payment = yield payment_1.Payment.build({
            payments: [{}],
        }).save();
        if (!payment) {
            throw new bad_request_error_1.BadRequestError("payment create failed");
        }
        const _contestant = yield contestants_1.Contestant.build({
            email,
            full_name,
            program,
            payment: payment._id,
            address,
            age,
            phone,
        }).save();
        if (!_contestant) {
            throw new bad_request_error_1.BadRequestError("Contestant not created");
        }
        return res.status(200).json({
            message: "Contestant added successfully",
            data: _contestant,
        });
    }
    catch (error) {
        throw new bad_request_error_1.BadRequestError(error.message
            ? error.message
            : "Failed to create Contestant. Debug Backend!");
    }
});
exports.createContestantHandler = createContestant;
