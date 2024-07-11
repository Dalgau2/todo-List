import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    //adding the  todo in array
    addTodo(state, action) {
      state.todos.unshift({
        id: nanoid(),
        todo: action.payload.todo,
      });
    },
    //removeTodo or Delete todo
    removeTodo(state, action) {
      const updatedTodo = state.todos.filter((task) => {
        return task.id != action.payload;
      });
      state.todos = updatedTodo;
    },

    editTodo(state, action) {
      console.log(action.payload);
    },
  },
});
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
