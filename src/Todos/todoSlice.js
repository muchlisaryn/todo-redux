import { createSlice } from "@reduxjs/toolkit";
import makeId from "./makeId";

const TodoSlice = createSlice({
    name: "todos",
    initialState : {
        todos : [],
    },

reducers : {

    addTodo(state, action) {
        state.todos.push({
            id : makeId(10),
            date : new Date().toDateString(),
            title : action.payload.value,
            completed: false,
        })
    },

    deleteTodo(state, action) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    
    todoChecked(state, action) {
        const checked = state.todos.find((todo) => todo.id === action.payload.id) 
        checked.completed = ! checked.completed
    }
}
})

export const {addTodo, deleteTodo, todoChecked} = TodoSlice.actions

export default TodoSlice.reducer

