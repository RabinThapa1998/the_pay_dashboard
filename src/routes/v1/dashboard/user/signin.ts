import { NextFunction, Router, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { signInUserHandler } from "../../../../controllers/v1/dashboard/user/create";
const router = Router();

const validateUserSignIn = [
  check("email").normalizeEmail().isEmail().withMessage("Invalid email"),
  check("password").trim().not().isEmpty().withMessage("password is required"),
];
const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const results = validationResult(req).array();
  if (!results.length) return next();
  const error = results[0].msg;
  res.json({ success: false, message: error });
};

router.post("/signin", validateUserSignIn, userValidation, signInUserHandler);

export { router as signInUserRouter };
