import { Router } from "express";
import { param } from "express-validator";
import { getOneContestentHandler } from "../../../../controllers/v1/dashboard/contestents/get-one";
import { isValidObjectId } from "../../../../services/object-id-validate";

const router = Router();
router.get(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Valid class id must be provided"),
  ],
  getOneContestentHandler
);

export { router as getOneContestentRouter };
