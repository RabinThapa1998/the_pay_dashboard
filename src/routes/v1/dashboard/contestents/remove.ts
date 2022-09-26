import { Router } from "express";
import { param } from "express-validator";
import { deleteContestentHandler } from "../../../../controllers/v1/dashboard/contestents/remove";
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
  deleteContestentHandler
);

export { router as deleteContestentRouter };
