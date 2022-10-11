import { Router } from "express";
import { check, validationResult } from "express-validator";
import { createCommonHandler } from "../../../../controllers/v1/dashboard/common/create";
import upload from "../../../../utils/multer";

const router = Router();
router.post("/", upload.single("file"), createCommonHandler);
export { router as createCommonRouter };
