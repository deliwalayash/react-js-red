import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState ={
    tasks:[]
}

const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTask :(state,action)=>{
            const task={
                id:nanoid(),
                ...action.payload
            }
            state.tasks.push(task)
        },
        deleteTask:(state,action)=>{
            const deletetaskId=action.payload
            state.tasks = state.tasks.filter((task)=>{
                return task.id !==deletetaskId
            })

        },
        updateTask:(state,action)=>{
            const upDateId=action.payload.id
            state.tasks=state.tasks.map((curEle)=>{
                return curEle.id == upDateId ? action.payload:curEle
            })
        }
    }
})

export const {addTask,deleteTask,updateTask}= todoSlice.actions

export default todoSlice.reducer

