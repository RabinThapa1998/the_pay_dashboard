"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const not_found_error_1 = require("./common/errors/not-found-error");
const error_handler_1 = require("./common/middlewares/error-handler");
const dashboard_1 = require("./routes/v1/dashboard");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1/dashboard", dashboard_1.indexDashboardRouter);
app.all("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("ALL END POINT!");
}));
app.all("*", (req, res) => {
    throw new not_found_error_1.NotFoundError();
});
app.use(error_handler_1.errorHandler);
