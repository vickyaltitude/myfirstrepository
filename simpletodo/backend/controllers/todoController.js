const Todo = require("../models/Todo");

//Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error while getting all todos" });
  }
};

//Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { id, title, completed } = req.body;
    if (!id || !title.trim()) {
      return res.status(400).json({ message: "ID and Title are required" });
    }
    const newTodo = await Todo.create({ id, title, completed });
    res.status(201).json({ message: "New todo created", todo: newTodo });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error while creating new todo" });
  }
};

//Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    console.log(req.body, id);
    const updateTodo = await Todo.findOneAndUpdate(
      { id: id },
      { title, completed },
      { new: true },
    );
    if (!updateTodo) {
      return res.status(404).json({ message: "Todo not found" });
    } else {
      res
        .status(200)
        .json({ message: "Todo updated successfully", todo: updateTodo });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error while updating todo" });
  }
};

//Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await Todo.findOneAndDelete({ id: id });
    console.log(deleteTodo);
    if (!deleteTodo) {
      return res.status(404).json({ message: "Todo not found" });
    } else {
      return res.status(200).json({ message: "Todo deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error while deleting todo" });
  }
};
