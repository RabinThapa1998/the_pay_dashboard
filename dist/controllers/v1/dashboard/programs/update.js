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
exports.updateProgramHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const programs_1 = require("../../../../models/programs");
const updateProgram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, desc, image_url, payment_schema } = req.body;
        const program = yield programs_1.Program.findById(req.params.id);
        if (!program) {
            throw new bad_request_error_1.BadRequestError("Program not found");
        }
        if (name)
            program.name = name;
        if (desc)
            program.desc = desc;
        if (image_url)
            program.image_url = image_url;
        if (payment_schema)
            program.payment_schema = payment_schema;
        yield program.save();
        return res
            .status(200)
            .json({ message: "program updated successfully", data: program });
    }
    catch (error) {
        throw new bad_request_error_1.BadRequestError(error.message
            ? error.message
            : "Failed to create Contestent. Debug Backend!");
    }
});
exports.updateProgramHandler = updateProgram;
