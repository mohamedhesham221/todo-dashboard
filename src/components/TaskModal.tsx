import {
  Box,
  Modal,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import type { TaskType, ColumnType } from "../types/types";
import { useTasksStore } from "../store/useTasksStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type TaskModalProps = {
  open: boolean;
  handleClose: () => void;
  column: ColumnType;
  task?: TaskType | null;
};
function TaskModal({ open, handleClose, column, task }: TaskModalProps) {
  const { addTask, tasks, updateTask } = useTasksStore();
  // Local state to manage task data within the modal
  const [taskData, setTaskData] = React.useState<TaskType>({
    id: "0",
    title: "",
    description: "",
    priority: "low",
    column: column,
  });
  // Update the local state with the task data when the modal opens for editing
  React.useEffect(() => {
    
    if (open && task) {
      setTaskData(task);
    } else {
      setTaskData({
        id: "",
        title: "",
        description: "",
        priority: "low",
        column: column,
      });
    }
  }, [open,task, column]);
  
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={style}
          component={"form"}
          onSubmit={(e) => {
            e.preventDefault();
            if (task) {
              updateTask(taskData);
            } else {
              addTask({ ...taskData, id: tasks.length + 1 + "" });
            }
            handleClose();
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" mb={2}>
            {task ? "Update Task" : "Add Task"}
          </Typography>

          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            required
            value={taskData.title}
            onChange={(e) =>
              setTaskData((prev) => ({ ...prev, title: e.target.value }))
            }
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            required
            value={taskData.description}
            onChange={(e) =>
              setTaskData((prev) => ({ ...prev, description: e.target.value }))
            }
            rows={3}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }} required>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              value={taskData.priority}
              label="Priority"
              onChange={(e) =>
                setTaskData((prev) => ({ ...prev, priority: e.target.value }))
              }
            >
              <MenuItem value="high">HIGH</MenuItem>
              <MenuItem value="medium">MEDIUM</MenuItem>
              <MenuItem value="low">LOW</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" fullWidth type="submit">
            {task ? "UPDATE" : "ADD"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default TaskModal;
