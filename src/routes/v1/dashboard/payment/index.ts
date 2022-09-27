import { Router } from "express";
import { createPaymentRouter } from "./create";
import { getPaymentsRouter } from "./get";

const router = Router();
router.use(createPaymentRouter);
router.use(getPaymentsRouter);
export { router as indexPaymentRouter };
