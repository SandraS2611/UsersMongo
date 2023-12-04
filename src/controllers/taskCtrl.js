import { TaskModel } from "../models/taskModels.js";
import { UserModel } from "../models/userModels.js";

export const ctrlCreateTask = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.user);

    if (!user) return res.sendStatus(404);

    const newTask = new TaskModel(req.body); //*VALIDA SOLO SI EXISTE EL USUARIO

    await newTask.save();

    //await user.updateOne({ $push : { tasks: newTask._id }})
    user.tasks.push(newTask - _id);

    await user.save();

    res.status(202).json(newTask);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

//! CREAR LOS DEMAS CONTROLLERS

export const ctrlListTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlDeleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await TaskModel.findById(taskId)

    if (!task) return res.sendStatus(404);

    const user = await UserModelModel.findById(task.user)

await task.deleteOne()

user.tasks = user.tasks.filter((task) => task._id === taskId)

await user.save()

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};