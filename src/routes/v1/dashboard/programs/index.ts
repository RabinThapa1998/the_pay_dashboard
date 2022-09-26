import { createProgramRouter } from "./create";
import { removeProgramRouter } from "./remove";
import { updateProgramRouter } from "./update";
import { getProgramRouter } from "./get";
import { getOneProgramRouter } from "./get-one";

import { Router } from "express";

const router = Router();
router.use(createProgramRouter);
router.use(removeProgramRouter);
router.use(updateProgramRouter);
router.use(getProgramRouter);
router.use(getOneProgramRouter);

export { router as indexProgramRouter };
