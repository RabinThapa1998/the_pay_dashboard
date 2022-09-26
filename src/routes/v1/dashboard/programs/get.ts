import Router from "express";
import { getProgramHandler } from "../../../../controllers/v1/dashboard/programs/get";

const router = Router();

router.get("/", getProgramHandler);

export { router as getProgramRouter };
