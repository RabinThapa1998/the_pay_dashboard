"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_request_1 = require("../../../../common/middlewares/validate-request");
const create_1 = require("../../../../controllers/v1/dashboard/payment/create");
const validateFields = [
    (0, express_validator_1.body)("amount").not().isEmpty().withMessage("Amount is required"),
    (0, express_validator_1.body)("vote").not().isEmpty().withMessage("Vote is required"),
    (0, express_validator_1.body)("contestent").not().isEmpty().withMessage("ContestentId is required"),
];
const router = (0, express_1.Router)();
exports.createPaymentRouter = router;
router.post("/", validateFields, validate_request_1.validateRequest, create_1.createPaymentHandler);
