import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import axios from 'axios'


import './form.css'
import { Redirect } from "react-router-dom";

const theme = createTheme();
var headers


const ipAddress = process.env.REACT_APP_IP;
const port = process.env.REACT_APP_PORT;

const Form = props => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
        "email": email,
        "password": password
    }

    console.log(data)

    axios.post(`http://${ipAddress}:${port}/admin/login`, data)
    .then(response => {
        console.log(response);
        setToken(localStorage.setItem('admin-access-token', response.data.token))
        headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}
    })
    .catch(e => {
        console.log(e.message);
    }).finally(() => {
        setLoggedIn(true)
    })
};

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to="/admin-console/dashboard" />;
  }



  return (
    <div className="formcon">
      {loggedIn && <Redirect to="/admin-console/dashboard" />}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={e => setEmail(e.target.value)}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
                    <Link href='/signup' variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    </div>
  );
};

export default Form;


