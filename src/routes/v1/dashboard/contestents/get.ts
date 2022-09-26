import { Router } from "express";
import { getContestentsHandler } from "../../../../controllers/v1/dashboard/contestents/get";

const router = Router();
router.get("/", getContestentsHandler);

export { router as getContestentsRouter };
