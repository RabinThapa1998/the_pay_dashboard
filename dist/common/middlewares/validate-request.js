"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const validateRequest = (req, res, next) => {
    const results = (0, express_validator_1.validationResult)(req).array();
    if (!results.length) {
        return next();
    }
    const error = results[0].msg;
    res.json({ success: false, message: error });
};
exports.validateRequest = validateRequest;
