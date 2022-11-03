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
exports.getProgramHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const programs_1 = require("../../../../models/programs");
const getProgram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _program = yield programs_1.Program.find();
        if (!_program.length) {
            throw new bad_request_error_1.BadRequestError("No programs found!");
        }
        return res.status(200).json({ data: _program });
    }
    catch (err) {
        throw new bad_request_error_1.BadRequestError("programs error");
    }
});
exports.getProgramHandler = getProgram;
