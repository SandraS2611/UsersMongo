import { Router } from "express";
import { ctrlCreateTask, ctrlListTasks, ctrlDeleteTask } from "../controllers/taskCtrl.js"

const taskRouter = Router()


taskRouter.get("/", ctrlListTasks)

taskRouter.post("/", ctrlCreateTask)

taskRouter.delete("/:taskId", ctrlDeleteTask)


export { taskRouter }