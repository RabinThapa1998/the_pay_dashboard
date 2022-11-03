"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneProgramRouter = void 0;
const express_1 = __importDefault(require("express"));
const get_one_1 = require("../../../../controllers/v1/dashboard/programs/get-one");
const object_id_validate_1 = require("../../../../services/object-id-validate");
const express_validator_1 = require("express-validator");
const router = (0, express_1.default)();
exports.getOneProgramRouter = router;
router.get("/:id", [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .custom((id) => (0, object_id_validate_1.isValidObjectId)(id))
        .withMessage("Valid class id must be provided"),
], get_one_1.getOneProgramHandler);
