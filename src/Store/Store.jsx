import { configureStore } from "@reduxjs/toolkit";
import { todoReducer,addTodo,removeTodo ,editTodo} from "./Slice/TodoSlice";
import { markdone,donetodoReducer } from "./Slice/doneTodoSlice";
const rootReducer = {
  todo: todoReducer,
  complete:donetodoReducer
};
const store = configureStore({
  name: "todoData",
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export {store,addTodo,removeTodo,markdone,editTodo}