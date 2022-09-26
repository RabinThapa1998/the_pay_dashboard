import { Router } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { createPaymentHandler } from "../../../../controllers/v1/dashboard/payment/create";
const validateFields = [
  body("amount").not().isEmpty().withMessage("Amount is required"),
  body("vote").not().isEmpty().withMessage("Vote is required"),
  body("contestent").not().isEmpty().withMessage("ContestentId is required"),
];
const router = Router();
router.post("/", validateFields, validateRequest, createPaymentHandler);

export { router as createPaymentRouter };
