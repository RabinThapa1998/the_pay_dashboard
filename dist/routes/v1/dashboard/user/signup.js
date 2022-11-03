"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUserRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const create_1 = require("../../../../controllers/v1/dashboard/user/create");
const router = (0, express_1.Router)();
exports.signUpUserRouter = router;
const validateUserSignUp = [
    (0, express_validator_1.check)("email").normalizeEmail().isEmail().withMessage("Invalid email"),
    (0, express_validator_1.check)("password")
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 8, max: 20 })
        .withMessage("password must be between 8 and 20 characters"),
];
const userValidation = (req, res, next) => {
    const result = (0, express_validator_1.validationResult)(req).array();
    console.log("🚀 ~ file: signup.ts ~ line 22 ~ userValidation ~ result", result);
    if (!result.length)
        return next();
    const error = result[0].msg;
    res.json({ success: false, message: error });
};
router.post("/signup", validateUserSignUp, userValidation, create_1.signUpUserHandler);
