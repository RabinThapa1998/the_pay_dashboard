"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgramRouter = void 0;
const express_1 = __importDefault(require("express"));
const get_1 = require("../../../../controllers/v1/dashboard/programs/get");
const router = (0, express_1.default)();
exports.getProgramRouter = router;
router.get("/", get_1.getProgramHandler);
