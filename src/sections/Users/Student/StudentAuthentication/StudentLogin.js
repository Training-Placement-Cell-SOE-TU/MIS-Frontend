import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect } from "react-router-dom";
import AlertBox from '../../../../components/Alerts/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import axios from 'axios'

const baseurl = process.env.REACT_APP_BASE_URL;

const theme = createTheme();

var headers

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [rollNo, setRollNo] = useState("")
    
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            "email": email,
            "password": password
        }

        axios.post(`${baseurl}/student/login`, data)
        .then(response => {
            setToken(localStorage.setItem('access-token', response.data.token))
            headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}
            setRollNo(response.data.roll_no)
            localStorage.setItem('student_roll', response.data.roll_no)
            setIsLoggedIn(true)
        })
        .catch(e => {
            setIsError(true)
            setErrorMessage(e.response.data.message)
        }).finally(() => {
            setLoading(false)
        })
    };

    function errorCheck() {
        if(isError) {
            return <AlertBox message={errorMessage} />
        }
    }

    function handleShowPassword() {
        setShowPassword(!showPassword)
      }

    function loadingCheck() {
        if(loading) {
            return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>)
        }
    }

    return (
        <>
        { isLoggedIn ?
            <Redirect push to={"/student/"+rollNo} /> :
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {errorCheck()}
            {loadingCheck()}
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
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showPassword}
                      onChange={handleShowPassword}
                      value="showPassword"
                      color="primary"
                    />
                  }
                  label="Show Password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => setLoading(true)}
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
                    <Link href="/student-signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
        }
        </>
    );
}