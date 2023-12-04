import { Schema, Types, model } from "mongoose";

//*MOLDE le da forma a nuestro usuario
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [
    {
      type: Types.ObjectId,
      ref: "Task",
    }
  ], 
});


export const UserModel = model("User", userSchema)