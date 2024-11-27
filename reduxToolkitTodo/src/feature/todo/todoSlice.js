import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    tasks:[{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTask:(state,action)=>{
            const task={
                id:nanoid(),
                text:action.payload
            }
            state.tasks.push(task)
        },

        removeTask:(state,action)=>{
            state.tasks=state.tasks.filter((task)=>task.id!==action.payload)
        }
    }    
})

export const {addTask,removeTask} = todoSlice.actions

export default todoSlice.reducer