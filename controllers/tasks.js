const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async");

//GET all
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

//POST
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

//GET one
const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ msg: `no task with id ${req.params.id}` });
  }
  res.status(200).json({ task });
});

//PATCH
const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ task });
});

//DELETE
const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ msg: `no task with id ${req.params.id}` });
  }
  res.status(200).json({ task });
});

//PUT
const editTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  // console.log(id);

  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  console.log(task);

  if (!task) {
    return res.status(404).json({ msg: `no task exists with id ${id}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};
