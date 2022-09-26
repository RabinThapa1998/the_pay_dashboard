import { Router } from "express";
import { param } from "express-validator";
import { updateContestentHandler } from "../../../../controllers/v1/dashboard/contestents/update";
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
  updateContestentHandler
);

export { router as updateContestentRouter };
