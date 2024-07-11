import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, markdone, editTodo } from "../Store/Store";
import "./todo.css";
import { toast } from "react-toastify";

const TodoUlList = () => {
  const dispatch = useDispatch();
  const todoTask = useSelector((state) => {
    return state.todo.todos;
  });
  const handleremove = (id) => {
    dispatch(removeTodo(id));
    toast.error('TODO IS DELETE')
  };
  const handleDone = (id,todo) => {
    const data={id:id,todo:todo}
    dispatch(markdone(data));
    setTimeout(() => {
      dispatch(removeTodo(id));
    }, 1000);
    toast.success(' TODO IS COMPLETED')
  };
  const handleEdit = (id) => {
    dispatch(editTodo(id));
  };
  return (
    <Box>
      <ul className="task-list">
        {todoTask.map((todo) => {
          return (
            <li key={todo.id} className="task-list-item" v-for="task in tasks">
              <input
                onClick={() => {
                  handleDone(todo.id,todo.todo);
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
          );
        })}
      </ul>
    </Box>
  );
};
export default TodoUlList;
