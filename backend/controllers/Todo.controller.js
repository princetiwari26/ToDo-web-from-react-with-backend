const TodoList = require("../models/Todo.model.js");
const mongoose = require("mongoose");

const postTodoData = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new TodoList({ title });
    await newTodo.save();
    res.status(200).json({ message: "Data Added Successfully", success: true });
  } catch (error) {
    res.status(501).json({ message: "Something Went Wrong!", success: false });
  }
};

const getTodoData = async (req, res) => {
  try {
    const getData = await TodoList.find();
    res.json(getData);
  } catch (error) {
    res.status(501).json({ message: "Something went wrong !!" });
  }
};

const editTodoData = async (req, res) => {
  try {
    const dataId = req.params.id;
    const { title } = req.body;
    const updatedData = await TodoList.findByIdAndUpdate(dataId, { title });
    res.status(501).json(updatedData);
  } catch (error) {
    res.status(404).json({ message: "Todo Not found", success: false });
  }
};

const deleteTodoData = async (req, res) => {
  try {
    const dataId = req.params.id;
    await TodoList.findByIdAndDelete(dataId);
    res
      .status(201)
      .json({ message: "Data Deleted Successfully", success: true });
  } catch (error) {
    res.status(501).json({ message: "Something went wrong !!" });
  }
};
module.exports = {
  postTodoData,
  getTodoData,
  editTodoData,
  deleteTodoData,
};
