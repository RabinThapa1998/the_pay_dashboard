"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
const mongoose_1 = require("mongoose");
const voteDefault = [
    {
        votes: 2,
        cost: 12,
    },
    {
        votes: 5,
        cost: 30,
    },
    {
        votes: 10,
        cost: 60,
    },
    {
        votes: 20,
        cost: 120,
    },
];
const programSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        default: "",
    },
    image_url: {
        type: String,
        default: "https://bitpointx.s3-ap-southeast-1.amazonaws.com/config/transparent_logo.png",
    },
    payment_schema: {
        type: [],
        default: voteDefault,
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
            // delete ret.desc;
            delete ret.__v;
        },
    },
    timestamps: true,
});
programSchema.statics.build = (attrs) => {
    return new Program(attrs);
};
const Program = (0, mongoose_1.model)("Program", programSchema);
exports.Program = Program;
