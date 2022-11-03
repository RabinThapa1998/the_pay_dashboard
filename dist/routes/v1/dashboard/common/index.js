"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexCommonRouter = void 0;
const create_1 = require("./create");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.indexCommonRouter = router;
router.use(create_1.createCommonRouter);
