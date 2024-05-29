"use client";
import React, { useState, useEffect } from "react";
import TasksPage from "./tasksPage";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <TasksPage/>
    </main>
  );
}
