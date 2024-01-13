import { createSlice } from "@reduxjs/toolkit";

const todo =createSlice({
    name:"todos",
    initialState:{
        todoArray:[],
        count:0

    },
    reducers:{
        addTodo:(state,actions)=>{
            state.todoArray.push(actions.payload)
        },
        deleteTodo:(state,actions)=>{
        state.todoArray =state.todoArray.filter(todo=>todo.id !==actions.payload);
        },
        TodoCount:(state,actions)=>{
            state.count=1
        }
    }

})
export const  {addTodo,deleteTodo,todoArray} = todo.actions;
export default todo.reducer