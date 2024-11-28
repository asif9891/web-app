import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Feature/Todo/todoSlice'

// Not ready yet
export const Store = configureStore({
    reducer: todoReducer
})