"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contestant = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const contestantSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        default: "",
    },
    full_name: {
        type: String,
        required: true,
    },
    photo_url: {
        type: String,
        default: "https://bitpointx.s3-ap-southeast-1.amazonaws.com/config/transparent_logo.png",
    },
    program: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Program",
        required: true,
    },
    payment: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Payment",
        required: true,
    },
    age: {
        type: Number,
        default: 0,
    },
    address: {
        type: String,
        default: "",
    },
    active: {
        type: Boolean,
        default: true,
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.desc;
            delete ret.__v;
        },
    },
    timestamps: true,
});
contestantSchema.statics.build = (attrs) => {
    return new Contestant(attrs);
};
const Contestant = (0, mongoose_1.model)("Contestant", contestantSchema);
exports.Contestant = Contestant;
