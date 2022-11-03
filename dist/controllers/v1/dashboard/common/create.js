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
exports.createCommonHandler = void 0;
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const cloudinary_1 = __importDefault(require("../../../../utils/cloudinary"));
const createCommon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file)
            throw new bad_request_error_1.BadRequestError("File is required");
        const result = yield cloudinary_1.default.uploader.upload(req.file.path);
        return res.status(200).json(result);
    }
    catch (error) {
        throw new bad_request_error_1.BadRequestError(error.message || "Failed to upload file. Debug Backend!");
    }
});
exports.createCommonHandler = createCommon;
