import mongoose, {
  Document,
  Schema,
  Model,
  connect,
  model,
  ObjectId,
} from "mongoose";

// creating an interface representing a document in mongodb
export interface contestentAttrs {
  email: string;
  phone?: string;
  full_name: string;
  photo_url?: string;
  age?: number;
  address?: string;
  program: ObjectId;
  payment: ObjectId;
}

export interface contestentDoc extends Document, contestentAttrs {
  email: string;
  phone: string;
  full_name: string;
  photo_url: string;
  age: number;
  address: string;
  program: ObjectId;
  payment: ObjectId;

  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface contestentModel extends Model<contestentAttrs> {
  build(attrs: contestentAttrs): contestentDoc;
}

const contestentSchema = new Schema<contestentDoc>(
  {
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
      default:
        "https://bitpointx.s3-ap-southeast-1.amazonaws.com/config/transparent_logo.png",
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
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
interface contestentModel extends Model<contestentAttrs> {
  build(attrs: contestentAttrs): contestentDoc;
}

contestentSchema.statics.build = (attrs: contestentAttrs) => {
  return new Contestent(attrs);
};

const Contestent = model<contestentDoc, contestentModel>(
  "Contestent",
  contestentSchema
);

export { Contestent };
