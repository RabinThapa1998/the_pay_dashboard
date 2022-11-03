"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePaymentRouter = void 0;
const express_1 = require("express");
const update_1 = require("../../../../controllers/v1/dashboard/payment/update");
const express_validator_1 = require("express-validator");
const object_id_validate_1 = require("../../../../services/object-id-validate");
const validate_request_1 = require("../../../../common/middlewares/validate-request");
const router = (0, express_1.Router)();
exports.updatePaymentRouter = router;
router.post("/:id", [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .custom((id) => (0, object_id_validate_1.isValidObjectId)(id))
        .withMessage("Valid class id must be provided"),
    (0, express_validator_1.check)("vote").notEmpty().withMessage("vote is required"),
    (0, express_validator_1.check)("amount").notEmpty().withMessage("amount is required"),
], validate_request_1.validateRequest, update_1.updatePaymentHandler);
