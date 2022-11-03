"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnePaymentRouter = void 0;
const express_1 = require("express");
const get_one_1 = require("../../../../controllers/v1/dashboard/payment/get-one");
const router = (0, express_1.Router)();
exports.getOnePaymentRouter = router;
router.get("/:id", get_one_1.getOnePaymentHandler);
