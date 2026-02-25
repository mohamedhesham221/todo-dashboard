export type TaskType = {
  id: number;
  title: string;
  description: string;
  column: "backlog" | "progress" | "review" | "done";
  priority: "low" | "medium" | "high";
};
export type ColumnProps = {
  title: string;
  color: string;
  tasksCounts?: number;
  tasks?: TaskType[];
}