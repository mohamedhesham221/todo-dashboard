import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ColumnType, TaskType } from "../types/types";

type TasksState = {
  query: string;
  setQuery: (q: string) => void;

  tasks: TaskType[];
  setTasks: (t: TaskType[]) => void;

  getFiltered: () => TaskType[];
  addTask: (t: TaskType) => void;
  deleteTask: (taskId: string) => void;
  updateTask: (updatedTask: TaskType) => void;
  moveTask: (taskId: string, newColumn: ColumnType) => void;
};
// Zustand store to manage tasks and search query
export const useTasksStore = create<TasksState>()(
  persist(
    (set, get) => ({
      tasks: [],
      setTasks: (t) => set({ tasks: t }),

      query: "",
      setQuery: (q) => set({ query: q }),
      getFiltered: () => {
        const { tasks, query } = get();

        if (!query) return tasks;

        const q = query.toLowerCase();

        return tasks.filter((task) =>
          [task.title, task.description].join(" ").toLowerCase().includes(q),
        );
      },
      addTask: (t: TaskType) =>
        set((state) => ({ tasks: [...state.tasks, t] })),
      updateTask: (updatedTask: TaskType) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === updatedTask.id ? { ...t, ...updatedTask } : t,
          ),
        })),
      deleteTask: (taskId: string) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== taskId) })),
      moveTask: (taskId, newColumn) => {
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === taskId ? { ...t, column: newColumn } : t,
          ),
        }));
      },
    }),
    {
      name: "tasks-storage",
    },
  ),
);
