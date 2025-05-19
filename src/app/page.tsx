"use client";

import { useEffect, useState } from "react";

import { Task } from "@/types/task";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    console.log(data);

    setTasks(data);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  const handleToggle = async (id: number, completed: boolean) => {
    await fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📋 Lista de Tarefas
      </h1>
      <TaskForm onAdd={fetchTasks} />
      <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
    </main>
  );
}
