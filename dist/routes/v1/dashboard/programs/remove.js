"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProgramRouter = void 0;
const express_1 = require("express");
const remove_1 = require("../../../../controllers/v1/dashboard/programs/remove");
const express_validator_1 = require("express-validator");
const object_id_validate_1 = require("../../../../services/object-id-validate");
const router = (0, express_1.Router)();
exports.removeProgramRouter = router;
router.delete("/:id", [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .custom((id) => (0, object_id_validate_1.isValidObjectId)(id))
        .withMessage("Valid class id must be provided"),
], remove_1.deleteProgramHandler);
