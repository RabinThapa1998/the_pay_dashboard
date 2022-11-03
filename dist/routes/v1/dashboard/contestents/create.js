"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContestantRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_request_1 = require("../../../../common/middlewares/validate-request");
const create_1 = require("../../../../controllers/v1/dashboard/contestents/create");
const validateFields = [
    (0, express_validator_1.check)("full_name").trim().not().isEmpty().withMessage("Fullname is required"),
    (0, express_validator_1.check)("program").trim().not().isEmpty().withMessage("ProgramId is required"),
    (0, express_validator_1.check)("email").normalizeEmail().isEmail().withMessage("Invalid email"),
];
const router = (0, express_1.Router)();
exports.createContestantRouter = router;
router.post("/", validateFields, validate_request_1.validateRequest, create_1.createContestantHandler);
