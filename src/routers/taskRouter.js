import { Router } from "express";
import { ctrlCreateTask, ctrlListTasks, ctrlDeleteTask } from "../controllers/taskCtrl.js"

const taskRouter = Router()


taskRouterRouter.get("/", ctrlListTasks)

taskRouterRouter.post("/", ctrlCreateTask)

taskRouterRouter.delete("/", ctrlDeleteTask)


export { taskRouter }