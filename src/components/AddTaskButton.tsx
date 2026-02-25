import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskModal from "./TaskModal";
import type { ColumnType } from "../types/types";


function AddTaskButton({column} : {column: ColumnType}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          width: "100%",
          color: "#57564F",
          borderColor: "#57564f5d",
          textTransform: "none",
          marginTop: "15px",
        }}
        startIcon={<AddIcon />}
      >
        Add task
      </Button>
      <TaskModal open={open} handleClose={handleClose} column={column} />
    </>
  );
}

export default AddTaskButton;
