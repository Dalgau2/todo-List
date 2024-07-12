import { configureStore } from "@reduxjs/toolkit";
import { todoReducer,addTodo,removeTodo } from "./Slice/TodoSlice";
import { markdone,donetodoReducer } from "./Slice/doneTodoSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig={
 key:"root",
 version:1,
 storage
}

const reducer=combineReducers({
  todo: todoReducer,
  complete:donetodoReducer
})

const persistedReducer=persistReducer(persistConfig,reducer)
// const rootReducer = {
//   todo: todoReducer,
//   complete:donetodoReducer
// };
const store = configureStore({
  name: "todoData",
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export {store,addTodo,removeTodo,markdone}