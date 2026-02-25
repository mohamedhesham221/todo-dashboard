export type TaskType = {
  id: string;
  title: string;
  description: string;
  column: "backlog" | "progress" | "review" | "done";
  priority: "low" | "medium" | "high";
};
export type ColumnType = Pick<TaskType, "column">["column"];

export type ColumnProps = {
  title: string;
  color: string;
  tasksCounts?: number;
  tasks?: TaskType[];
  column: ColumnType;
}