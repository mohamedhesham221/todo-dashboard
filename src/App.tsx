import { Box, Stack } from "@mui/material";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Column from "./components/Column";
import { useTasks } from "./hooks/useTasks";

const colors = {
  backlog: "#0BA6DF",
  inProgress: "#FF9A00",
  inReview: "#4D2D8C",
  done: "#08CB00",
} as const;
function App() {
  const { backlog, inProgress, inReview, done} = useTasks();
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        height: "100vh",
      }}
    >
      <AppHeader />
      <Stack direction="row" spacing={5} padding="15px">
        <Column
          title="TO DO"
          tasksCounts={backlog.length}
          color={colors.backlog}
          tasks={backlog}
        />
        <Column
          title="IN Progress"
          tasksCounts={inProgress.length}
          color={colors.inProgress}
          tasks={inProgress}
        />
        <Column
          title="IN REVIEW"
          tasksCounts={inReview.length}
          color={colors.inReview}
          tasks={inReview}
        />
        <Column
          title="DONE"
          tasksCounts={done.length}
          color={colors.done}
          tasks={done}
        />
      </Stack>
    </Box>
  );
}

export default App;
