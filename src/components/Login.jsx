import React from 'react';
import LoginNavbar from '../components/style-components/Login-Nav.jsx';
import { Grid } from '@material-ui/core';
import GoogleLoginButton from '../components/goog-auth-components/GoogleLoginButton.jsx';
import logo from '../../assets/myvote_lg.png';

const Login = ({ loginUser, isLoggedIn, onSignIn, handleLoginUser }) => {
  return (
    <div className='landing-page-container'>
      <LoginNavbar />
      <div className='login-form'>
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
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 400,
              }}
            >
              <Grid container justify='center'>
                <img src={logo} width={600} alt='logo' />
                <br></br>
                <GoogleLoginButton
                  handleLoginUser={handleLoginUser}
                  onSignIn={onSignIn}
                  isLoggedIn={isLoggedIn}
                />
              </Grid>
            </div>
            <div />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
