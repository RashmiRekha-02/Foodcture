import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState , useEffect  } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fontFamily } from '@mui/system';
import {Link , useNavigate} from "react-router-dom";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a color="inherit" href="https://mui.com/">
        Your Website
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {

  const navigate = useNavigate();
  //console.log(sessionStorage.getItem("wcEmail"));
  useEffect(() => {
      if (sessionStorage.getItem("wcEmail") != null) {
          navigate('/');
      }
  })
  const [aemail,setAEmail]= useState('');
  const [apassword,setAPassword]= useState('');
  const [amsg,setAMsg]= useState('');

  const handleAdminLogin= (e) => {
      e.preventDefault();
      var email = aemail;
      var password = apassword;
      const payload = {email, password};
      fetch('//13.127.82.222:8778/loginAdmin/',{
          method : 'POST',
          headers : {"Content-Type":"application/json"},
          body: JSON.stringify(payload)
      }).then((res)=>{    
          return res.json();
      }).then((data)=>{
          console.log(data);
          if (data.status === "1") {
              sessionStorage.setItem("adminEmail", data.email);
              navigate('/admin');
          }
          else{
              setAMsg(data.msg);
          }
          
          
      })
  }


  const [lemail,setLEmail]= useState('');
  const [lpassword,setLPassword]= useState('');
  const [lmsg,setLMsg]= useState('');

  const handleLogin= (e) => {
      e.preventDefault();
      var email = lemail;
      var password = lpassword;
      const payload = {email, password};
      const status = "1";
      console.log(email)
      if (status === "1") {
                    sessionStorage.setItem("FcEmail", email);
                    navigate('/dashboard');
                }



  //     fetch('//13.127.82.222:8778/loginUser/',{
  //         method : 'POST',
  //         headers : {"Content-Type":"application/json"},
  //         body: JSON.stringify(payload)
  //     }).then((res)=>{    
  //         return res.json();
  //     }).then((data)=>{
  //         if (data.status === "1") {
  //             sessionStorage.setItem("wcEmail", data.email);
  //             navigate('/');
  //         }
  //         else{
  //             setLMsg(data.msg);
  //         }
          
          
  //     })
   }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#570099',
            fontWeight:'bolder'
          }}
        >
          <Avatar sx={{ m: "22vh 0 1vh 0", bgcolor: '#570099' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <span style={{fontWeight:"500", fontFamily:"Poppins"}}>Sign in</span>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="lemail"
              autoComplete="email"
              autoFocus
              value={lemail}
              onChange={(e)=>setLEmail(e.target.value)}
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
              value={lpassword}
              onChange={(e)=>setLPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to={'/dashboard'}>
            <Button
              onClick={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button></Link>
            <Grid container>
              <Grid item xs>
                <a href="#" variant="body2">
                  Forgot password?
                </a>
              </Grid>
              <Link to={'/register'}>
              <Grid item style={{marginRight:"4vw"}}>
                <a href="#" variant="body2">
                  {"Don't have an account?"}
                </a>
                
              </Grid>
              </Link>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}