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
exports.getOneProgramHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const contestants_1 = require("../../../../models/contestants");
const programs_1 = require("../../../../models/programs");
const getOneProgram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const program = yield programs_1.Program.findById(id);
        if (!program) {
            throw new bad_request_error_1.BadRequestError("Program not found");
        }
        const contestants = yield contestants_1.Contestant.find({ program: id });
        return res.status(200).json({ data: { program, contestants } });
    }
    catch (error) {
        throw new bad_request_error_1.BadRequestError(error.message
            ? error.message
            : "Failed to create Contestant. Debug Backend!");
    }
});
exports.getOneProgramHandler = getOneProgram;
