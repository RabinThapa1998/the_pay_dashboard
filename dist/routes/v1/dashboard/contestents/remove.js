"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContestantRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const remove_1 = require("../../../../controllers/v1/dashboard/contestents/remove");
const object_id_validate_1 = require("../../../../services/object-id-validate");
const router = (0, express_1.Router)();
exports.deleteContestantRouter = router;
router.delete("/:id", [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .custom((id) => (0, object_id_validate_1.isValidObjectId)(id))
        .withMessage("Valid class id must be provided"),
], remove_1.deleteContestantHandler);
