import { Router } from "express";
import { getPaymentsHandler } from "../../../../controllers/v1/dashboard/payment/get";

const router = Router();
router.get("/", getPaymentsHandler);

export { router as getPaymentsRouter };
