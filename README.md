This is a [Next.js](https://nextjs.org/) project with Tailwind CSS, Redux. It is a simple To-do Application

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with any browser to see the result.

## Technologies Used

To learn more about Next.js, take a look at the following resources:
-Local Storage for Database
-Tailwind CSS for design
-Redux for State Management
-Next JS for Development

## Features

Upon starting the app, the user will find the following features:
-Create New Task/ Add Task
-Can Delete Tasks
-Can edit Tasks
-Can see All Tasks

## Code Structure
In the App folder, tasksPage.js file contains frontend code for web page which is later imported to page.js file in the same folder.

There's folder named redux which contains todoSlice.js, store.js, provider.js. 

Here todoSlice.js file in redux folder contains reducers for the to-do app. Adding tasks, editing tasks and deleting task states are defined there.

store.js was used to as centralized place to manage application states.

provider was used so that redux store can be used in next js. Provider was imported in layout.js file in app folder.

Reactjs-popup was additionally used for using pop up box.