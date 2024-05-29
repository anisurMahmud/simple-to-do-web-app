import { createSlice } from "@reduxjs/toolkit";

const savedTasks = localStorage.getItem('tasks') != null ? JSON.parse(localStorage.getItem('tasks')) : []
export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        tasks: savedTasks,
    },
    reducers: {
        addTask: (state, action) =>{
            state.tasks.push({id:Date.now(), ...action.payload});
            localStorage.setItem('tasks', JSON.stringify(state.tasks.map(savedTasks=>savedTasks)));
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks.map(savedTasks=>savedTasks)));
        },
        editTask: (state,action) => {
            const TaskIndex = state.tasks.findIndex(task => task.id ===action.payload.taskId);
            if (TaskIndex !==-1){
                state.tasks[TaskIndex] = {...state.tasks[TaskIndex], title: action.payload.title, description: action.payload.description};
            };
            localStorage.setItem('tasks', JSON.stringify(state.tasks.map(savedTasks=>savedTasks)));
        },
    },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;