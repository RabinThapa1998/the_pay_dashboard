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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProgramHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const programs_1 = require("../../../../models/programs");
const createPrograms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, desc, image_url, payment_schema } = req.body;
        const program = yield programs_1.Program.findOne({ name: name });
        if (program) {
            throw new bad_request_error_1.BadRequestError("Program already exists");
        }
        const _program = yield programs_1.Program.build({
            name,
            desc,
            image_url,
            payment_schema,
        }).save();
        return res
            .status(200)
            .json({ message: "Program added successfully", data: _program });
    }
    catch (error) {
        throw new bad_request_error_1.BadRequestError(error.message || "Failed to create Contestent. Debug Backend!");
    }
});
exports.createProgramHandler = createPrograms;
