"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContestantsRouter = void 0;
const express_1 = require("express");
const get_1 = require("../../../../controllers/v1/dashboard/contestents/get");
const router = (0, express_1.Router)();
exports.getContestantsRouter = router;
router.get("/", get_1.getContestantsHandler);
