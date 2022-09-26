import { signInUserRouter } from "./signin";
import { signUpUserRouter } from "./signup";

import { Router } from "express";
const router = Router();

router.use(signInUserRouter);
router.use(signUpUserRouter);

export { router as indexUserRouter };
