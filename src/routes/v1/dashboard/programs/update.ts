import { Router } from "express";
import { param } from "express-validator";
import { updateProgramHandler } from "../../../../controllers/v1/dashboard/programs/update";
import { isValidObjectId } from "../../../../services/object-id-validate";

const router = Router();
router.patch(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Valid class id must be provided"),
  ],
  updateProgramHandler
);
export { router as updateProgramRouter };
