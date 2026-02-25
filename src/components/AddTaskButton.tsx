import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
function AddTaskButton() {
  return (
    <Button
      variant="outlined"
      sx={{
        width: "100%",
        color: "#57564F",
        borderColor: "#57564f5d",
        textTransform: "none"
      }}
      startIcon={<AddIcon />}
    >
      Add task
    </Button>
  );
}

export default AddTaskButton;
