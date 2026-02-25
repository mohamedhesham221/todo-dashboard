import { Box, Stack, Typography } from "@mui/material";
import AddTaskButton from "./AddTaskButton";
import Task from "./Task";
import type { TaskType, ColumnProps } from "../types/types";


function Column({ title, color, tasksCounts, tasks, column }: ColumnProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#ebf0f0",
        height: "max-content",
        width: "20%",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <Stack
        direction="row"
        spacing={5}
        sx={{ justifyContent: "flex-start", alignItems: "center" }}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: color,
            width: "10px",
            height: "10px",
            borderRadius: "100%",
          }}
        />
        <Typography variant="h6" fontSize={12} fontWeight="700">
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontSize={10}
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: "100%",
            padding: "4px",
            lineHeight: 1,
          }}
        >
          {tasksCounts}
        </Typography>
      </Stack>
      <Stack direction="column" spacing={3} sx={{ marginTop: "15px" }}>
        { // Render tasks in the column
        tasks?.map((task: TaskType) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            priority={task.priority}
            description={task.description}
            color="#EEEEEE"
            column={column}
          />
        ))}
      </Stack>
      <AddTaskButton column={column} />
    </Box>
  );
}

export default Column;
