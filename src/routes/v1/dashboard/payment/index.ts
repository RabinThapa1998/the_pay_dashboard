import { Router } from "express";
import { createPaymentRouter } from "./create";

const router = Router();
router.use(createPaymentRouter);
export { router as indexPaymentRouter };
