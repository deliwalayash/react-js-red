import { configureStore } from "@reduxjs/toolkit";
import todoreducer from '../features/Todos/todoSlice'

const store= configureStore({
    reducer:todoreducer
})

export default store