import React from 'react';
import LoginNavbar from '../components/style-components/Login-Nav.jsx';
import { Grid, TextField } from '@material-ui/core';
import logo from '../../assets/myvote_lg.png';

const Login = () => (
  <div className='login-page'>
    <LoginNavbar />
    <div className='login-form'>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      <Grid container style={{ minHeight: '100vh' }} justify='center'>
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{ padding: 10 }}
          alignItems='center'
          justify='space-between'
          direction='column'
        >
          <div />
          <div
            style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}
          >
            <Grid container justify='center'>
              <img src={logo} width={600} alt='logo' />
            </Grid>
            <TextField label='Email Address' margin='normal' />
            <TextField label='Password' margin='normal' />
            <Grid container justify='center'>
              <button>
                <a className='google-btn' href='/auth/google'>
                  Sign in with Google
                </a>
              </button>
            </Grid>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Login;
