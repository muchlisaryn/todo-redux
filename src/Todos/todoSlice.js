import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todos",
    initialState : {
        todos : [],
    },
    
reducers : {

    addTodo(state, action) {
        state.todos.push({
            id : new Date().toDateString(),
            title : action.payload.text,
            completed: false,
        })
    },

    deleteTodo(state, action) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    
    todoChekced(state, action) {
        const checked = state.todos.find((todo) => todo.id === action.payload.id) 
        checked.completed = ! checked.completed
    }
}
})

export const {addTodo, deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer

