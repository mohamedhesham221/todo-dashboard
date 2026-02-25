import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTasksStore } from "../store/useTasksStore";
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
function SearchBar() {
  const { setQuery, query } = useTasksStore();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle search input change
    setQuery(event.target.value);
  };
  return (
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
        value={query}
        onChange={handleSearchChange}
        endAdornment={
          query && (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setQuery("")}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </Search>
  );
}

export default SearchBar;
