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

const defaultTheme = createTheme();

export default function BookAppBar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/sign-in");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
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
          {/* <Link
            href="/sign-in"
            variant="body2"
            style={{ color: "inherit", textDecoration: "none" }}
          > */}
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
