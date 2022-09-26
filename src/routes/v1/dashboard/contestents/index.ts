import { Router } from "express";
import { createContestentRouter } from "./create";
import { getContestentsRouter } from "./get";
import { getOneContestentRouter } from "./get-one";
import { deleteContestentRouter } from "./remove";
import { updateContestentRouter } from "./update";

const router = Router();

router.use(createContestentRouter);
router.use(getContestentsRouter);
router.use(getOneContestentRouter);
router.use(deleteContestentRouter);
router.use(updateContestentRouter);

export { router as indexContestentRouter };
