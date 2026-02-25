import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import { useTasksStore } from "../store/useTasksStore";
import TaskModal from "./TaskModal";
import type { ColumnType } from "../types/types";
type TaskProps = {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  color: string;
  column: ColumnType;
};
function Task({ id, title, description, priority, column }: TaskProps) {
  const { deleteTask } = useTasksStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const task = { id, title, description, priority, column };
  return (
    <Card sx={{ backgroundColor: "#fff", cursor: 'grab' }} draggable onDragStart={(e) => {
    e.dataTransfer.setData("taskId", id);
  }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Chip
          label={priority}
          color={
            priority === "low"
              ? "default"
              : priority === "medium"
                ? "warning"
                : "error"
          }
          variant="outlined"
          sx={{
            backgroundColor: `${priority === "low" ? "#eeeeee68" : priority === "medium" ? "#f5c15668" : "#d4454568"}`,
            padding: "0 5px",
            fontSize: 10,
            marginTop: "10px",
            textTransform: "Uppercase",
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          onClick={() => deleteTask(id)}
          startIcon={<DeleteIcon />}
          sx={{
            color: "#d44545",
            borderColor: "#57564f5d",
            textTransform: "none",
          }}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            handleOpen();
          }}
          startIcon={<Edit />}
          sx={{
            borderColor: "#57564f5d",
            textTransform: "none",
          }}
        >
          Edit
        </Button>
      </CardActions>
      <TaskModal
        open={open}
        handleClose={handleClose}
        column={column}
        task={task}
      />
    </Card>
  );
}

export default Task;
