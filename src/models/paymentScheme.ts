import mongoose, {
  Document,
  Schema,
  Model,
  connect,
  model,
  ObjectId,
} from "mongoose";

// creating an interface representing a document in mongodb
export interface paymentSchemeAttrs {
  votes: number;
  cost: number;
}

export interface paymentSchemeDoc extends Document, paymentSchemeAttrs {
  votes: number;
  cost: number;
  active: boolean;
}

interface paymentSchemeModel extends Model<paymentSchemeAttrs> {
  build(attrs: paymentSchemeAttrs): paymentSchemeDoc;
}

const paymentSchema = new Schema<paymentSchemeDoc>(
  {
    votes: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
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
interface paymentSchemeModel extends Model<paymentSchemeAttrs> {
  build(attrs: paymentSchemeAttrs): paymentSchemeDoc;
}

paymentSchema.statics.build = (attrs: paymentSchemeAttrs) => {
  return new PaymentScheme(attrs);
};

const PaymentScheme = model<paymentSchemeDoc, paymentSchemeModel>(
  "Payment",
  paymentSchema
);

export { PaymentScheme };
