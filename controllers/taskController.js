import mongoose from "mongoose";
import TaskModel from "../models/taskModel.js";

export const getAllTasks = async (req, res) => {
  try {
    const TaskMessages = await TaskModel.find();

    res.status(200).json(TaskMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSingleTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await TaskModel.findById(id);
    res.status(200).json( task );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, message, creator, priority } = req.body;

  const newTask = new TaskModel({ title, message, priority, creator });

  try {
    await newTask.save();
    res.status(201).json( newTask);
  } catch (error) {}
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, priority } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  const updatedTask = { creator, title, message, priority, _id: id };

  await TaskModel.findByIdAndUpdate(id, updatedTask, { new: true });

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  await TaskModel.findByIdAndRemove(id);

  res.json({ message: "task deleted successfully." });
};

export const likeTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No task with id: ${id}`);

  const task = await TaskModel.findById(id);

  const updatedTask = await TaskModel.findByIdAndUpdate(
    id,
    { likeCount: task.likeCount + 1 },
    { new: true }
  );

  res.json(updatedTask);
};
