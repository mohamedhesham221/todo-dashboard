import { Box, Stack, Typography } from "@mui/material";
import AddTaskButton from "./AddTaskButton";
import Task from "./Task";

type ColumnProps = {
  title: string;
  color: string;
  tasksCounts?: number;
};
function Column({ title, color, tasksCounts }: ColumnProps) {
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
            padding:"4px",
            lineHeight: 1
          }}
        >
          {tasksCounts}
        </Typography>
      </Stack>
      <Stack direction="column" spacing={5}>
        <Task title="API integration" priority="low" description="do some work for this task" color="#EEEEEE"/>
      </Stack>
        <AddTaskButton />
    </Box>
  );
}

export default Column;
