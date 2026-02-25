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
        textTransform: "none",
        marginTop: "15px",
      }}
      startIcon={<AddIcon />}
    >
      Add task
    </Button>
  );
}

export default AddTaskButton;
