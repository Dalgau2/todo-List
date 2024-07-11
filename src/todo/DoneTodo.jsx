import { Box } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, markdone, editTodo } from "../Store/Store";
import "./todo.css";

const DoneTodo = () => {
  const donetodoTask = useSelector((state) => {
    return state.complete.doneTodos;
  });
  console.log(donetodoTask)
  return (
    <Box>
      <ul className="task-list">
        {donetodoTask.map((todo) => {
          return (
            <li style={{display:"flex",justifyContent:"space-between"}} key={todo.id} className="task-list-item" v-for="task in tasks">
              <span>{todo.complete}</span>
              <span> <CheckCircleOutlineIcon sx={{color:"green"}}/></span>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
export default DoneTodo;
