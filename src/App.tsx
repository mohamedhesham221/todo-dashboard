import { Box, Stack } from "@mui/material";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Column from "./components/Column";
import { useTasks } from "./hooks/useTasks";
import type { TaskType, ColumnType} from "./types/types";
  type ColumnsType = {
    title: string;
    type: ColumnType,
    color: string;
    tasks: TaskType[];
  }[];

function App() {
  const { backlog, inProgress, inReview, done } = useTasks();
  // Define the columns with their respective tasks
  const columns: ColumnsType = [
    {
      title: "TO DO",
      type: "backlog",
      color: "#0BA6DF",
      tasks: backlog,
    },
    {
      title: "IN PROGRESS",
      type: "progress",
      color: "#FF9A00",
      tasks: inProgress,
    },
    {
      title: "IN REVIEW",
      type: "review",
      color: "#4D2D8C",
      tasks: inReview,
    },
    { title: "DONE", type: "done", color: "#08CB00", tasks: done },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <AppHeader />
      <Stack direction="row" spacing={5} padding="15px">
        {columns.map((col) => (
          <Column
            key={col.type}
            title={col.title}
            column={col.type}
            tasksCounts={col.tasks.length}
            color={col.color}
            tasks={col.tasks}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default App;
