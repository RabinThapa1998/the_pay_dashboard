import { Router } from "express";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { indexCommonRouter } from "./common";
import { indexContestantRouter } from "./contestents";
import { indexPaymentRouter } from "./payment";
import { indexProgramRouter } from "./programs";
import { indexUserRouter } from "./user";

const router = Router();

router.use("/user", indexUserRouter);
router.use("/programs", indexProgramRouter);
router.use("/contestants", indexContestantRouter);
router.use("/payments", indexPaymentRouter);
router.use("/common", indexCommonRouter);

export { router as indexDashboardRouter };
