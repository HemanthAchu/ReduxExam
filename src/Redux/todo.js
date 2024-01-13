import { createSlice } from "@reduxjs/toolkit";

const todo =createSlice({
    name:"todos",
    initialState:{
        todoArray:[],
        counter:""

    },
    reducers:{
        addTodo:(state,actions)=>{
            state.todoArray.push(actions.payload)
        },
        deleteTodo:(state,actions)=>{
        state.todoArray =state.todoArray.filter(todo=>todo.id !==actions.payload);
        const completedCount=state.todoArray.filter(item=>item.status).length
            state.counter=completedCount
        },
        TodoCount:(state,actions)=>{
            const{status,id}=actions.payload
            state.todoArray.filter(item=>{
                if(item.id==id){
                    item.status=status
                }
                return item
                
            })
            const completedCount=state.todoArray.filter(item=>item.status).length
            state.counter=completedCount
        }
        
    }

})
export const  {addTodo,deleteTodo,todoArray,TodoCount} = todo.actions;
export default todo.reducer