"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentsRouter = void 0;
const express_1 = require("express");
const get_1 = require("../../../../controllers/v1/dashboard/payment/get");
const router = (0, express_1.Router)();
exports.getPaymentsRouter = router;
router.get("/", get_1.getPaymentsHandler);
