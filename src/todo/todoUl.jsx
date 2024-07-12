import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, markdone, addTodo } from "../Store/Store";
import "./todo.css";
import { toast } from "react-toastify";
import { useState } from "react";

const TodoUlList = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [todoString, setTodoString] = useState("");
  const todoTask = useSelector((state) => {
    return state.todo.todos;
  });
  const handleremove = (id) => {
    dispatch(removeTodo(id));
    toast.error("TODO IS DELETE");
  };
  const handleDone = (id, todo) => {
    const data = { id: id, todo: todo };
    dispatch(markdone(data));
    setTimeout(() => {
      dispatch(removeTodo(id));
    }, 1000);
    toast.success(" TODO IS COMPLETED");
  };
  const handleEdit = (id) => {
    // set
    const isexist = todoTask.filter((todo) => {
      return todo.id === id;
    });
    if (isexist) {
      setIsEdit(true);
      const editTodo = isexist.map((td) => {
        return td.todo;
      });
      console.log(editTodo);
    } else {
      console.log("non");
    }
  };
  //edit
  const handleChange = (e) => {
    setTodoString(e.target.value);
  };
  // add
  const handleAdd = () => {
    if (todoString.length >= 1) {
      const data = { todo: todoString };
      dispatch(addTodo(data));
      console.log(todoString, "tododtring");
      setTodoString("");
      toast.success("TODO IS ADD");
    } else {
      toast.error("please add todo");
    }
  };
  return (
    <Box>
      <ul className="task-list">
        {todoTask.map((todo) => {
          return (
            <>
              <li
                key={todo.id}
                className="task-list-item"
                v-for="task in tasks"
              >
                <input
                  onClick={() => {
                    handleDone(todo.id, todo.todo);
                  }}
                  type="checkbox"
                />
                <span>{todo.todo}</span>
                <span
                  className="delete-btn"
                  title="Delete Task"
                  onClick={() => {
                    handleremove(todo.id);
                  }}
                ></span>
                <span
                  onClick={() => {
                    handleEdit(todo.id);
                  }}
                >
                  <EditIcon sx={{ color: "red", marginLeft: "5px" }} />{" "}
                </span>
              </li>
            </>
          );
        })}
      </ul>
    </Box>
  );
};
export default TodoUlList;
