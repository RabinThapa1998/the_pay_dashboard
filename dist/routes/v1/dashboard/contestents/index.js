"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexContestantRouter = void 0;
const express_1 = require("express");
const create_1 = require("./create");
const get_1 = require("./get");
const get_one_1 = require("./get-one");
const remove_1 = require("./remove");
const update_1 = require("./update");
const router = (0, express_1.Router)();
exports.indexContestantRouter = router;
router.use(create_1.createContestantRouter);
router.use(get_1.getContestantsRouter);
router.use(get_one_1.getOneContestantRouter);
router.use(remove_1.deleteContestantRouter);
router.use(update_1.updateContestantRouter);