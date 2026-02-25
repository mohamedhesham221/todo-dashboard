import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

type TaskProps = {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  color: string;
};
function Task({ title, description, priority }: TaskProps) {
  return (
    <Card sx={{ backgroundColor: "#fff" }}>
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
          startIcon={<Edit />}
          sx={{
            borderColor: "#57564f5d",
            textTransform: "none",
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default Task;
