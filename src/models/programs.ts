import { Document, Schema, Model, connect, model } from "mongoose";

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
// creating an interface representing a document in mongodb
export interface programAttrs {
  name: string;
  desc?: string;
  image_url?: string;
  payment_schema?: {
    votes: number;
    cost: number;
  }[];
}

export interface ProgramDoc extends Document, programAttrs {
  name: string;
  desc: string;
  image_url: string;
  payment_schema: {
    votes: number;
    cost: number;
  }[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface programModel extends Model<programAttrs> {
  build(attrs: programAttrs): ProgramDoc;
}

const programSchema = new Schema<ProgramDoc>(
  {
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
      default:
        "https://bitpointx.s3-ap-southeast-1.amazonaws.com/config/transparent_logo.png",
    },
    payment_schema: {
      type: [],
      default: voteDefault,
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
        // delete ret.desc;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

//creating a Model corresponding to the doc interface
interface programModel extends Model<programAttrs> {
  build(attrs: programAttrs): ProgramDoc;
}

programSchema.statics.build = (attrs: programAttrs) => {
  return new Program(attrs);
};

const Program = model<ProgramDoc, programModel>("Program", programSchema);

export { Program };
