import Router from "express";
import { getOneProgramHandler } from "../../../../controllers/v1/dashboard/programs/get-one";
import { isValidObjectId } from "../../../../services/object-id-validate";
import { body, param } from "express-validator";

const router = Router();

router.get(
  "/:id",
  [
    param("id")
      .notEmpty()
      .custom((id) => isValidObjectId(id))
      .withMessage("Valid class id must be provided"),
  ],
  getOneProgramHandler
);

export { router as getOneProgramRouter };
