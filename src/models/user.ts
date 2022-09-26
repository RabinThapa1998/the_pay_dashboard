import { Document, Schema, Model, connect, model } from "mongoose";

// creating an interface representing a document in mongodb
export interface userAttrs {
  email: string;
  password: string;
}

export interface UserDoc extends Document, userAttrs {
  email: string;
  password: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface UserModel extends Model<userAttrs> {
  build(attrs: userAttrs): UserDoc;
}

const userSchema = new Schema<UserDoc>(
  {
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
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

//creating a Model corresponding to the doc interface
interface userModel extends Model<userAttrs> {
  build(attrs: userAttrs): UserDoc;
}

userSchema.statics.build = (attrs: userAttrs) => {
  return new User(attrs);
};

const User = model<UserDoc, UserModel>("User", userSchema);

export { User };
