"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommonRouter = void 0;
const express_1 = require("express");
const create_1 = require("../../../../controllers/v1/dashboard/common/create");
const multer_1 = __importDefault(require("../../../../utils/multer"));
const router = (0, express_1.Router)();
exports.createCommonRouter = router;
router.post("/", multer_1.default.single("file"), create_1.createCommonHandler);
