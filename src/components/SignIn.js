// SignIn.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLoginUserMutation } from "../app/api";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
// import { login } from "../app/store";

const defaultTheme = createTheme();

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please provide both email and password.");
      return;
    }
    try {
      const result = await loginUser({ email, password });
      console.log("Login API Result:", result);

      if (result.data && Array.isArray(result.data) && result.data.length > 0) {
        const user = result.data[0];
        const { id, role } = user;

        // Store userId and role in localStorage
        localStorage.setItem("userId", id);
        localStorage.setItem("role", role);

        dispatch(login(user));
        // Redirect based on user's role
        if (role === "admin") {
          // Redirect to admin dashboard
          navigate("/admin-dashboard");
        } else {
          // Redirect to user dashboard
          navigate("/user-dashboard");
        }
        console.log("Login successful:", user);
      } else {
        console.error("Invalid response format");
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
    }

    //   if (response.data) {
    //     // Handle successful login
    //     navigate("/user-dashboard"); // Adjust the redirect based on your logic
    //   } else {
    //     console.log("Invalid credentials");
    //     // Handle invalid credentials (e.g., show an error message)
    //   }
    // } catch (error) {
    //   console.error("Error logging in:", error);
    //   // Handle error (e.g., show an error message)
    // }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 9,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
