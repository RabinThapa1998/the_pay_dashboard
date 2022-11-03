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
exports.signInUserHandler = exports.signUpUserHandler = void 0;
const user_1 = require("../../../../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../../config"));
const bad_request_error_1 = require("../../../../common/errors/bad-request-error");
const password_1 = require("../../../../services/password");
const signUpUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    try {
        const { email, password } = req.body;
        const user = yield user_1.User.findOne({ email });
        if (user) {
            console.log("🚀 ~ file: create.ts ~ line 13 ~ signUpUser ~ user", user);
            // return res.status(422).json({ message: "user already exists" });
            throw new bad_request_error_1.BadRequestError("user already exists");
        }
        // const salt = await bcrypt.genSalt(saltRounds);
        // const hashedPassword = await bcrypt.hash(password, salt);
        const hashedPassword = yield password_1.Password.toHash(password);
        const add = yield new user_1.User({
            email: email,
            password: hashedPassword,
        }).save();
        return res.status(200).json({ message: "Sign up successful" });
    }
    catch (err) {
        throw new bad_request_error_1.BadRequestError(err.message || "Fix backend");
    }
});
exports.signUpUserHandler = signUpUser;
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_1.User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "user not found" });
            // throw new NotFoundError();
        }
        // const isPassValid = await bcrypt.compare(password, user.password);
        const isPassValid = yield password_1.Password.compare(user === null || user === void 0 ? void 0 : user.password, password);
        if (!isPassValid) {
            // return res.status(422).json({ message: "Invalid password" });
            throw new bad_request_error_1.BadRequestError("Invalid password");
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, config_1.default.app.jwtSecret);
        res.cookie("accessToken", token);
        return res.status(200).json({ mess: "sign in successfully", token: token });
    }
    catch (err) {
        throw new bad_request_error_1.BadRequestError(err.message || "Fix backend");
    }
});
exports.signInUserHandler = signInUser;
