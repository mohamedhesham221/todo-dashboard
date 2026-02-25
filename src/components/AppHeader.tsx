import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#d8d8d8",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: " #44444E",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    "&::placeholder": {
      color: "#44444E",
      opacity: 1,
    },
  },
}));
function AppHeader() {
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
                  10 Tasks
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: "#44444E",
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search tasks…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
