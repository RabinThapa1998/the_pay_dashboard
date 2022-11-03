"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
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
            delete ret.password;
            delete ret.__v;
        },
    },
    timestamps: true,
});
userSchema.statics.build = (attrs) => {
    return new User(attrs);
};
const User = (0, mongoose_1.model)("User", userSchema);
exports.User = User;
