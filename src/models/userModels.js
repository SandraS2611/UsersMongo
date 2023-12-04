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
  //! RELACIÓN ENDEBIDA (TODO ESTA DENTRO)
  // tasks: [ //* GENERA UNA RELACIÓN Y COLOCA UN ID - NO SE NECESITA UN CRUD COMPLETA PERO LAS PETICIONES SE HACEN AL USUARIO
  //   { 
  //   text: {
  //     type: String,
  //     required: true,
  //   },
  //   done: {
  //     type: Boolean,
  //     default: false,
  //   },
  // }
  // ],
  tasks: [ //! RELACIÓN 
    {
      type: Types.ObjectId,
      ref: "Task",
    }
  ], 
});


export const UserModel = model("User", userSchema)