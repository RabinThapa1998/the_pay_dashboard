"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
var paymentEnum;
(function (paymentEnum) {
    paymentEnum["esewa"] = "esewa";
    paymentEnum["khalti"] = "khalti";
})(paymentEnum || (paymentEnum = {}));
const paymentSchema = new mongoose_1.Schema({
    payments: [
        {
            payment_type: {
                type: String,
                enum: paymentEnum,
                default: paymentEnum.esewa,
            },
            amount: {
                type: Number,
                // required: true,
                default: 0,
            },
            vote: {
                type: Number,
                // required: true,
                default: 0,
            },
        },
    ],
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
paymentSchema.statics.build = (attrs) => {
    return new Payment(attrs);
};
const Payment = (0, mongoose_1.model)("Payment", paymentSchema);
exports.Payment = Payment;
