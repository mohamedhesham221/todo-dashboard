import { useFetch } from "./useFetch";
import type { TaskType } from "../types/types";
import React from "react";
import { useTasksStore } from "../store/useTasksStore";
export function useTasks() {
  const { data, isLoading, error } = useFetch();
  const { query, setQuery, setTasks, tasks } = useTasksStore();
  // Update the tasks in the store when data is fetched
  React.useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data, setTasks]);
// Filter tasks based on the search query
  const filteredData = query ? useTasksStore.getState().getFiltered() : tasks;

  // Separate tasks into their respective columns
  const backlog =
    filteredData?.filter((task: TaskType) => task.column === "backlog") || [];
  const inProgress =
    filteredData?.filter((task: TaskType) => task.column === "progress") || [];
  const inReview =
    filteredData?.filter((task: TaskType) => task.column === "review") || [];
  const done =
    filteredData?.filter((task: TaskType) => task.column === "done") || [];

  return {
    backlog,
    inProgress,
    inReview,
    done,
    isLoading,
    error,
    query,
    setQuery,
  };
}
