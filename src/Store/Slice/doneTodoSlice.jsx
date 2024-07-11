import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const doneTodoSlice=createSlice({
    name:"doneTodos",
       initialState:{
        doneTodos:[]
       },
       reducers:{
        markdone(state,action){
            console.log(action.payload,"complete task checking")
            state.doneTodos.push({
                id:action.payload.id,
                complete:action.payload.todo})
        }
       }
})
export const {markdone}=doneTodoSlice.actions
export const donetodoReducer=doneTodoSlice.reducer