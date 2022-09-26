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
  payment_type: paymentEnum;
  amount: number;
  vote: number;
  contestent: ObjectId;
}

export interface paymentDoc extends Document, paymentAttrs {
  payment_type: paymentEnum;
  amount: number;
  vote: number;
  contestent: ObjectId;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface paymentModel extends Model<paymentAttrs> {
  build(attrs: paymentAttrs): paymentDoc;
}

const paymentSchema = new Schema<paymentDoc>(
  {
    payment_type: {
      type: String,
      enum: paymentEnum,
      default: paymentEnum.esewa,
    },
    amount: {
      type: Number,
      required: true,
    },
    vote: {
      type: Number,
      required: true,
    },
    contestent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contestent",
      required: true,
    },
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
