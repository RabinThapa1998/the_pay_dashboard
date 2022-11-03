"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUserRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const create_1 = require("../../../../controllers/v1/dashboard/user/create");
const router = (0, express_1.Router)();
exports.signInUserRouter = router;
const validateUserSignIn = [
    (0, express_validator_1.check)("email").normalizeEmail().isEmail().withMessage("Invalid email"),
    (0, express_validator_1.check)("password").trim().not().isEmpty().withMessage("password is required"),
];
const userValidation = (req, res, next) => {
    const results = (0, express_validator_1.validationResult)(req).array();
    if (!results.length)
        return next();
    const error = results[0].msg;
    res.json({ success: false, message: error });
};
router.post("/signin", validateUserSignIn, userValidation, create_1.signInUserHandler);
