import { Router, Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { signUpUserHandler } from "../../../../controllers/v1/dashboard/user/create";

const router = Router();

const validateUserSignUp = [
  check("email").normalizeEmail().isEmail().withMessage("Invalid email"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 20 })
    .withMessage("password must be between 8 and 20 characters"),
];
const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req).array();
  console.log(
    "🚀 ~ file: signup.ts ~ line 22 ~ userValidation ~ result",
    result
  );
  if (!result.length) return next();
  const error = result[0].msg;
  res.json({ success: false, message: error });
};
router.post("/signup", validateUserSignUp, userValidation, signUpUserHandler);

export { router as signUpUserRouter };
