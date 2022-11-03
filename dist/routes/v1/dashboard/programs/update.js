"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgramRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const update_1 = require("../../../../controllers/v1/dashboard/programs/update");
const object_id_validate_1 = require("../../../../services/object-id-validate");
const router = (0, express_1.Router)();
exports.updateProgramRouter = router;
router.patch("/:id", [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .custom((id) => (0, object_id_validate_1.isValidObjectId)(id))
        .withMessage("Valid class id must be provided"),
], update_1.updateProgramHandler);
