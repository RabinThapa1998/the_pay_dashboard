import mongoose, {
  Document,
  Schema,
  Model,
  connect,
  model,
  ObjectId,
} from "mongoose";

enum paymentEnum {
  esewa = "esewa",
  khalti = "khalti",
}
// creating an interface representing a document in mongodb
export interface paymentAttrs {
  payments: {
    payment_type?: paymentEnum;
    amount?: number;
    vote?: number;
  }[];
}

export interface paymentDoc extends Document, paymentAttrs {
  payments: {
    payment_type?: paymentEnum;
    amount?: number;
    vote?: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}

interface paymentModel extends Model<paymentAttrs> {
  build(attrs: paymentAttrs): paymentDoc;
}

const paymentSchema = new Schema<paymentDoc>(
  {
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
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.desc;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

//creating a Model corresponding to the doc interface
interface paymentModel extends Model<paymentAttrs> {
  build(attrs: paymentAttrs): paymentDoc;
}

paymentSchema.statics.build = (attrs: paymentAttrs) => {
  return new Payment(attrs);
};

const Payment = model<paymentDoc, paymentModel>("Payment", paymentSchema);

export { Payment };
