import  React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect } from 'react-router-dom';
import {v4 as uuidv4 } from "uuid";
import AlertBox from '../../../../components/Alerts/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import axios from "axios"

const theme = createTheme();


const baseurl = process.env.REACT_APP_BASE_URL;

const genderList = [
  {
    value: "male",
    label: "Male"
  },

  {
    value: "female",
    label: "Female"
  },

  {
    value: "other",
    label: "Other"
  }
]

const branchList = [
  {
    value: "Electronics And Communication Engineering",
    label: "ECE"
  },

  {
    value: "Computer Science And Engineering",
    label: "CSE"
  },

  {
    value: "Mechanical Engineering",
    label: "ME"
  },

  {
    value: "Civil Engineering",
    label: "CE"
  },

  {
    value: "Food And Engineering Technology",
    label: "FET"
  },

  {
    value: "Electrical Engineering",
    label: "EE"
  }
]

const programmeList = [
  {
    value: "B.Tech",
    label: "B.Tech"
  },

  {
    value: "MCA",
    label: "MCA"
  },

  {
    value: "M.Tech",
    label: "M.Tech"
  },

  {
    value: "B.Sc",
    label: "B.Sc"
  }
]

export default function SignUp() {

  const date = new Date()

  const [gender, setGender] = useState("");
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [rollNo, setRollNo] = useState("")
  const [batch, setBatch] = useState(date.getFullYear())
  const [branch, setBranch] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [programme, setProgramme] = useState("")

  const [isSigned, setIsSigned] = useState(false)

  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      "student_id": uuidv4(),
      "fname": fname,
      "lname": lname,
      "roll_no": rollNo,
      "batch": batch,
      "branch": branch,
      "gender": gender,
      "email": email,
      "phone": phone,
      "password": password,
      "programme": programme
    }

    axios.post(`${baseurl}/student/add`, data)
    .then(response => {
        setIsSigned(true)
    })
    .catch(e => {
        setIsError(true)
        setErrorMessage(e.response.data)
    }).finally(() => {
        setLoading(false)
    })
  };

  function errorCheck() {
    if(isError) {
      if (errorMessage === "student already exists") {
        return <AlertBox message={`Email Or Roll No. already exists`} />
    }
  }
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

function handleShowPassword() {
  setShowPassword(!showPassword)
}

  return (
    (!isSigned ) ? 
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {errorCheck()}
        {loadingCheck()}
        <Box
          sx={{
            marginTop: 0,
            marginBottom: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={fname}
                  onChange={e => setFname(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lname}
                  onChange={e => setLname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  helperText="Only Gmail Allowed"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="gender"
                  select
                  label="Gender"
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  {genderList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="rollNo"
                  required
                  fullWidth
                  id="rollNo"
                  label="Roll No"
                  value={rollNo}
                  onChange={e => setRollNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="batch"
                  label="Batch"
                  type="number"
                  name="batch"
                  value={batch}
                  onChange={e => setBatch(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="branch"
                  select
                  label="Branch"
                  name="branch"
                  value={branch}
                  onChange={e => setBranch(e.target.value)}
                >
                  {branchList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="programme"
                  select
                  label="Programme"
                  value={programme}
                  onChange={e => setProgramme(e.target.value)}
                >
                  {programmeList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  onChange={e => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={e => setPassword(e.target.value)}
                  helperText="At least 8 character long with at least one number, one special character 
                              and one uppercase and lowercase letter"
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setLoading(true)}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    : <Redirect to="/student-login" />
  );
}