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
exports.updateContestantHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const contestants_1 = require("../../../../models/contestants");
const updateContestant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { full_name, age, address, program, phone, email } = req.body;
        const contestant = yield contestants_1.Contestant.findOne({ _id: id });
        if (!contestant) {
            throw new bad_request_error_1.BadRequestError("Contestant not found");
        }
        contestant.email = email || contestant.email;
        contestant.full_name = full_name || contestant.full_name;
        contestant.program = program || contestant.program;
        contestant.address = address || contestant.address;
        contestant.age = age || contestant.age;
        contestant.phone = phone || contestant.phone;
        yield contestant.save();
        return res
            .status(200)
            .json({ message: "Updated successfully", data: contestant });
    }
    catch (error) {
        throw new bad_request_error_1.BadRequestError(error.message
            ? error.message
            : "Failed to create Contestant. Debug Backend!");
    }
});
exports.updateContestantHandler = updateContestant;
