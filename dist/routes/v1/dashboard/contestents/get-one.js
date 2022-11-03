"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneContestantRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const get_one_1 = require("../../../../controllers/v1/dashboard/contestents/get-one");
const object_id_validate_1 = require("../../../../services/object-id-validate");
const router = (0, express_1.Router)();
exports.getOneContestantRouter = router;
router.get("/:id", [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .custom((id) => (0, object_id_validate_1.isValidObjectId)(id))
        .withMessage("Valid class id must be provided"),
], get_one_1.getOneContestantHandler);
