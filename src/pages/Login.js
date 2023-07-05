import React from 'react';
import Button from '@mui/material/Button';
import { Avatar, createTheme, ThemeProvider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

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

  #username:focus,
  #password:focus {
    box-shadow: none;
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

  .text-focus {
    border: none !important; /* Override the interfering border style */
    /* Add any other necessary overrides */
  }

  input:focus {
    outline: none;
  }

  .css-oy83vm-MuiDivider-root {
    margin-left: 15%;
    margin-right: 15%;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogIn = () => {
    if (isGoogleEmail(email)) {
      setErrorMessage(
        'This is a google email address, use the log in with google option instead'
      );
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Invalid Email');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          // Email does not exist, show error message
          setErrorMessage(
            'Invalid email address. Please check your email and try again.'
          );
        } else if (error.code === 'auth/wrong-password') {
          // Password does not match, show error message
          setErrorMessage(
            'Invalid password. Please check your password and try again.'
          );
        } else {
          console.log('Error logging in:', error);
        }
      });
  };

  function validateEmail(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  }

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const isGoogleEmail = (email) => {
    const googleEmailRegex =
      /@gmail\.com$|^[\w.+-]+@(googlemail|google)\.[a-z]{2,}$/i;
    return googleEmailRegex.test(email);
  };

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
                  label="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errorMessage}
                  helperText={errorMessage}
                />

                <TextField
                  id="password"
                  variant="outlined"
                  label="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="login-button-div">
                  <Button variant="contained" onClick={handleLogIn}>
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
                    onClick={handleLoginWithGoogle}
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
