import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import TemporaryDrawer from "./BookSidebar";

const defaultTheme = createTheme();

export default function BookAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    navigate("/sign-in");
  };
  const handleLogout = () => {
    // Remove userId from local storage
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    // Dispatch the logout action to update the Redux state
    dispatch(logout());
    // Navigate to the home page
    navigate("/");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)} //burger icon
          >
            <MenuIcon />
          </IconButton>

          <Link
            href="/"
            color="inherit"
            variant="h6"
            style={{ color: "inherit", textDecoration: "none" }}
            sx={{ flexGrow: 1 }}
          >
            {"Books Library App"}
          </Link>

          {!userId ? (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {!role ? (
        ""
      ) : role === "admin" ? (
        <TemporaryDrawer
          state={state}
          setState={setState}
          toggleDrawer={toggleDrawer}
        />
      ) : (
        ""
      )}
    </Box>
  );
}
