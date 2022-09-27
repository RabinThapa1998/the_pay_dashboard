import { Router } from "express";
import { createPaymentRouter } from "./create";
import { getPaymentsRouter } from "./get";
import { updatePaymentRouter } from "./update";
import { getOnePaymentRouter } from "./get-one";

const router = Router();
router.use(createPaymentRouter);
router.use(getPaymentsRouter);
router.use(updatePaymentRouter);
router.use(getOnePaymentRouter);
export { router as indexPaymentRouter };
