import { Router } from "express";
import { getOnePaymentHandler } from "../../../../controllers/v1/dashboard/payment/get-one";

const router = Router();

router.get("/:id", getOnePaymentHandler);

export { router as getOnePaymentRouter };
