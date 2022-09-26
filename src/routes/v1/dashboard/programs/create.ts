import { Router } from "express";
import { check, validationResult } from "express-validator";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { createProgramHandler } from "../../../../controllers/v1/dashboard/programs/create";

const validateFields = [
  check("name").trim().not().isEmpty().withMessage("program name is required"),
  //   check("desc").trim().not().isEmpty().withMessage("desc is required"),
];

const router = Router();
router.post("/", validateFields, validateRequest, createProgramHandler);
export { router as createProgramRouter };
