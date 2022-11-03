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
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
console.log("config", config_1.default.app.mongoUri);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting up........");
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not defined");
    }
    const server = require("http").createServer(app_1.app);
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URI, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        //   useCreateIndex: true,
        });
        console.log("Connected to MongoDb");
    }
    catch (err) {
        console.error(err);
    }
    server.listen(config_1.default.app.port, () => {
        console.log(`Listening on port ${config_1.default.app.port}`);
    });
});
start();
