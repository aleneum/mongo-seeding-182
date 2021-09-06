import mongoose, { Schema, Document } from "mongoose";
import { ObjectId } from "mongodb";

export const UserSchema: Schema = new Schema();

UserSchema.add({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  id: {
    type: Number,
    unique: true,
  },
});

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  id: number;
}

export interface IUserData {
  _id?: ObjectId;
  firstName?: string;
  lastName?: string;
  id?: number;
}

export const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
