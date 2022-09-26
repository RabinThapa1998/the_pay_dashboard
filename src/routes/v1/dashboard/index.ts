import { Router } from "express";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { indexContestentRouter } from "./contestents";
import { indexPaymentRouter } from "./payment";
import { indexProgramRouter } from "./programs";
import { indexUserRouter } from "./user";

const router = Router();

router.use("/user", indexUserRouter);
router.use("/program", indexProgramRouter);
router.use("/contestent", indexContestentRouter);
router.use("/payment", indexPaymentRouter);

export { router as indexDashboardRouter };
