import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Bounce, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../Store/Store";
import { useState } from "react";
import "./todo.css";
import TodoUlList from "./todoUl";
import DoneTodo from "./DoneTodo";
const TodoList = () => {
  const todoTask = useSelector((state) => {
    return state.todo.todos;
  });
  const [todoString, setTodoString] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const dispatch = useDispatch();
  //function for get the value from input
  const handleChange = (e) => {
    setTodoString(e.target.value);
  };
  //function for add the todo in list
  const handleAdd = () => {
    const data = { todo: todoString };
    dispatch(addTodo(data));
    console.log(todoString, "tododtring");
    setTodoString("");
    toast.success("TODO IS ADD");
  };
  // show the done todos
  const handleShow = () => {
    setIsTrue(!isTrue);
  };
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="app-container"
        id="taskList"
      >
        <h1 className="app-header">TO DO LIST</h1>
        <div className="add-task">
          <input
            type="text"
            placeholder="Add New Task"
            v-model="tasks.name"
            className="task-input"
            onChange={handleChange}
            value={todoString}
            required="true"
          />
          <input
            type="submit"
            value=""
            className="submit-task"
            title="Add Task"
            onClick={handleAdd}
          />
        </div>
        {/* ul li component */}
        <TodoUlList />
      </motion.div>
      {isTrue ? (
        <div>
          <div>
            <DoneTodo />
          </div>
          <Button
            elevation={14}
            variant="contained"
            sx={{ marginTop: "5px", backgroundColor: "white", color: "black" }}
            onClick={handleShow}
          >
            hide Done Todos
          </Button>
        </div>
      ) : (
        <Button
          elevation={14}
          variant="contained"
          sx={{ marginTop: "5px", backgroundColor: "black" }}
          onClick={handleShow}
        >
          Show Done Todos
        </Button>
      )}
    </Box>
  );
};
export default TodoList;
