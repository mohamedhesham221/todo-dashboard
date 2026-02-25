import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import { useTasksStore } from "../store/useTasksStore";

function AppHeader() {
  const {tasks} = useTasksStore()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#f4f4f4" }}
        elevation={1}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <Stack direction="row" spacing={2}>
              <Box
                sx={{
                  backgroundColor: "#3c64d7",
                  padding: "5px",
                  borderRadius: 1,
                }}
              >
                <DashboardIcon />
              </Box>
              <Box sx={{ marginLeft: 2 }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: 12,
                    fontWeight: "bold",
                    display: { xs: "none", sm: "block" },
                    color: "#4f4f53",
                  }}
                >
                  KANBAN BOARD
                </Typography>
                <Typography
                  variant="body1"
                  noWrap
                  fontSize={12}
                  component="div"
                  sx={{ color: "#4f4f53" }}
                >
                  {tasks.length} Tasks
                </Typography>
              </Box>
            </Stack>
          </Box>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
