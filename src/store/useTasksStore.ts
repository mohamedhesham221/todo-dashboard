import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TaskType } from "../types/types";

type TasksState = {
  query: string;
  setQuery: (q: string) => void;

  tasks: TaskType[];
  setTasks: (t: TaskType[]) => void;

  getFiltered: () => TaskType[];
};

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
    }),
    {
      name: "tasks-storage",
    },
  ),
);

/**
 * create<TasksState>((set, get) => ({
  query: "",

  setQuery: (q) => set({ query: q }),

  tasks: [],
  setTasks: (t) => set({ tasks: t }),

  getFiltered: () => {
    const { tasks, query } = get();

    if (!query) return tasks;

    const q = query.toLowerCase();

    return tasks.filter((task) =>
      [task.title, task.description].join(" ").toLowerCase().includes(q)
    );
  },
}));
 */
