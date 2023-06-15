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

const LoginStyled = styled.div`
  .login-container {
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

  .login-form-container {
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
  }

  form {
    justify-content: center;
    align-items: center;
  }

  .login-form TextField {
    margin: 2%;
    width: 40vw;
  }

  .login-button-div {
    margin-top: 10%;
  }

  .login-button-div Button {
    width: 30vw;
    margin-left: 20%;
  }

  .login-button-div .divider-div {
    margin: 2% 8%;
    color: #0074d9;
  }

  .css-oy83vm-MuiDivider-root {
    margin-left: 15%;
    margin-right: 15%;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <LoginStyled>
        <div className="login-container">
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
          <div className="login-form-container">
            <div className="login-form">
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': {
                    m: 1,
                    width: '30vw',
                    marginLeft: '20%',
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="username" label="Your Email Address" />
                <TextField id="password" label="Your Password" />
                <div className="login-button-div">
                  <Button variant="contained" onClick={() => navigate('/')}>
                    Login
                  </Button>
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
                    Sign in with Google
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </LoginStyled>
    </ThemeProvider>
  );
}
