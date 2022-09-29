import { Router } from "express";
import { updatePaymentHandler } from "../../../../controllers/v1/dashboard/payment/update";
import { check, param } from "express-validator";
import { isValidObjectId } from "../../../../services/object-id-validate";
import { validateRequest } from "../../../../common/middlewares/validate-request";

const router = Router();
router.post(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Valid class id must be provided"),
    check("vote").notEmpty().withMessage("vote is required"),
    check("amount").notEmpty().withMessage("amount is required"),
  ],
  validateRequest,
  updatePaymentHandler
);

export { router as updatePaymentRouter };
