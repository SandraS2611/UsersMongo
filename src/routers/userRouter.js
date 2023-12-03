import { Router } from "express";
import {
  ctrlCreateNewUser,
  ctrlDeleteUser,
  ctrlFindOneUser,
  ctrlListUsers,
  ctrlUpdateUser,
} from "../controllers/userCtrl.js";

const userRouter = Router();

//todo SIN ID
userRouter.get("/", ctrlListUsers);
userRouter.post("/", ctrlCreateNewUser);

//todo CON ID
userRouter.get("/:userId", ctrlFindOneUser);
userRouter.patch("/:userId", ctrlUpdateUser);
userRouter.delete("/:userId", ctrlDeleteUser);

export { userRouter };
