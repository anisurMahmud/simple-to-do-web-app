"use client";

import React, { useState } from "react";
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editTask } from "@/redux/todoSlice";

export default function TasksPage(){

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.todo.tasks);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    // useEffect(() => {
    // const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    // if (savedTasks) {
    //     dispatch(editTask(savedTasks));
    // }
    // }, [dispatch]);

    // useEffect(() => {
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    // }, [tasks]);

    const handleAddTask = () => {
    if (title.trim() !==''){
        dispatch(addTask({title, description}));
        setTitle('');
        setDescription('');
    }
    };

    const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
    };

    const handleEditTask = (taskId, newTitle, newDescription) =>{
    dispatch(editTask({ taskId, title: newTitle, description: newDescription}));
    };

    return(
        <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-3xl text-center flex flex-col gap-4 font-bold mb-4">To Do List</h1>
        <div className="mb-4">
        <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500" />
          <button onClick={handleAddTask} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Task</button>
        </div>
        <ul>
          {tasks.map(task =>(
            <li key={task.id} className="border-b border-gray-300 py-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <div>
              
                {/* <button onClick={()=> handleEditTask(task.id, 'New Title', 'New Description')} className="px-3 py-1 bg-green-500 text-white rounded-md mr-2">Edit</button> */}
                <Popup trigger={<button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2">Edit</button>}> 
                <div>
                    <input type="text" placeholder="Task Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500" />
                    <input type="text" placeholder="Task Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md mr-2 focus:outline-none focus:border-blue-500" />
                    <button onClick={()=> handleEditTask(task.id, newTitle, newDescription)} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2">Update</button>
                </div></Popup>
                <button onClick={() => handleDeleteTask(task.id)} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2">Delete </button>
              </div>

            </li>
          ))}
        </ul>
        
      </div>

    );
}

