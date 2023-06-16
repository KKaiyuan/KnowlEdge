import React from 'react';
import Button from '@mui/material/Button';
import { Avatar, createTheme, ThemeProvider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

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

const SignUpStyled = styled.div`
  .sign-up-container {
    display: inline-flex;
  }

  .logo-container {
    display: flex;
    width: 50vw;
    height: 100vh;
    background: #0074d9;
    align-items: center;
    justify-content: center;
  }

  .logo {
    display: flex-start;
    width: 25vw;
  }

  .logo-hat {
    width: 15vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }

  .logo-tag {
    width: 25vw;
  }

  #email:focus,
  #username:focus,
  #password:focus {
    box-shadow: none;
  }

  .sign-up-form-container {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sign-up-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
  }

  form {
    justify-content: center;
    align-items: center;
  }

  .sign-up-form TextField {
    margin: 2%;
    width: 40vw;
  }

  .sign-up-button-div {
    margin-top: 10%;
  }

  .sign-up-button-div Button {
    width: 30vw;
    margin-left: 20%;
  }

  .sign-up-button-div .divider-div {
    margin: 2% 8%;
    color: #0074d9;
  }

  .css-oy83vm-MuiDivider-root {
    margin-left: 15%;
    margin-right: 15%;
  }
`;

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <SignUpStyled>
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
                  '& .MuiTextField-root': {
                    m: 1,
                    width: '30vw',
                    marginLeft: '20%',
                    border: 'none',
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="username"
                  variant="outlined"
                  label="Your Full Name"
                />
                <TextField
                  id="email"
                  variant="outlined"
                  label="Your Email Address"
                />
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
                  <Button
                    variant="contained"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </SignUpStyled>
    </ThemeProvider>
  );
}
