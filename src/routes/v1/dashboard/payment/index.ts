import { Router } from "express";
import { createPaymentRouter } from "./create";
import { getPaymentsRouter } from "./get";
import { updatePaymentRouter } from "./update";

const router = Router();
router.use(createPaymentRouter);
router.use(getPaymentsRouter);
router.use(updatePaymentRouter);
export { router as indexPaymentRouter };
