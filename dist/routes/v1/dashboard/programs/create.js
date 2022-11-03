"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProgramRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_request_1 = require("../../../../common/middlewares/validate-request");
const create_1 = require("../../../../controllers/v1/dashboard/programs/create");
const validateFields = [
    (0, express_validator_1.check)("name").trim().not().isEmpty().withMessage("program name is required"),
    //   check("desc").trim().not().isEmpty().withMessage("desc is required"),
];
const router = (0, express_1.Router)();
exports.createProgramRouter = router;
router.post("/", validateFields, validate_request_1.validateRequest, create_1.createProgramHandler);
