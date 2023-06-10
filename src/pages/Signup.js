import React from 'react';
import './Signup.css';
import Button from '@mui/material/Button';
import { Avatar, createTheme, ThemeProvider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#0074d9',
    },
  },
});

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <div className="sign-up-container">
        <div className="logo-container">
          <div className="logo">
            <img
              className="logo-hat"
              src={require('../assets/images/knowledge-hat.png')}
            ></img>
            <img
              className="logo-tag"
              src={require('../assets/images/knowledge-tag.png')}
            ></img>
          </div>
        </div>
        <div className="sign-up-form-container">
          <div className="sign-up-form">
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '40vw' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="username" label="Your Full Name" />
              <TextField id="username" label="Your Email Address" />
              <TextField
                id="password"
                label="Your Password"
                helperText="At least 8 characters."
              />
              <div className="sign-up-button-div">
                <Button variant="contained">Create Account</Button>
                <div className="divider-div">
                  <Divider variant="middle">or</Divider>
                </div>
                <Button
                  className="google-signin"
                  variant="outlined"
                  startIcon={
                    <Avatar
                      sx={{ height: '16px', width: '16px' }}
                      src={require('../assets/images/google-icon.png')}
                    />
                  }
                >
                  Sign up with Google
                </Button>
                <div className="divider-div">
                  <Divider variant="middle">or</Divider>
                </div>
                <Button variant="contained" onClick={() => navigate('/login')}>
                  Login
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
