import { Router } from "express";
import { deleteProgramHandler } from "../../../../controllers/v1/dashboard/programs/remove";
import { body, param } from "express-validator";
import { isValidObjectId } from "../../../../services/object-id-validate";

const router = Router();
router.delete(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Valid class id must be provided"),
  ],
  deleteProgramHandler
);
export { router as removeProgramRouter };
