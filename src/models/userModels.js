import { Schema, model } from "mongoose";

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
});


export const UserModel = model("User", userSchema)