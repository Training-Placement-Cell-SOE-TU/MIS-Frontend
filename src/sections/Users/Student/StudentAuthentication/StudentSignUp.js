import React from 'react';
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

import axios from "axios"

const theme = createTheme();


const ipAddress = process.env.REACT_APP_IP;
const port = process.env.REACT_APP_PORT;

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

  const [gender, setGender] = React.useState("");
  const [fname, setFname] = React.useState("")
  const [lname, setLname] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [rollNo, setRollNo] = React.useState("")
  const [batch, setBatch] = React.useState(date.getFullYear())
  const [branch, setBranch] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [programme, setProgramme] = React.useState("")

  const [isSigned, setIsSigned] = React.useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
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

    console.log(data)

    axios.post(`https://${ipAddress}:${port}/student/add`, data)
    .then(response => {
        console.log(response);
    })
    .catch(e => {
        console.log(e.message);
    }).finally(() => {
      setIsSigned(true)
    })
  };

  return (
    (!isSigned ) ? 
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
                  type="password"
                  id="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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