import { google } from '../../../server/config/keys.js';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenId } from '../../../server/helpers/refreshToken.js';
import createVoterId from '../../../server/helpers/createVoterId';

import newUserCreate from '../../../server/helpers/newUserCreate';

const clientId = google.clientID;

const GoogleLoginButton = ({ isLoggedIn, loginUser }) => {
  const onSuccess = (res) => {
    console.info('[Successfully logged in!] currentUser:', res.profileObj);
    const { email, givenName, familyName, googleId } = res.profileObj;

    newUserCreate(email, googleId, givenName, familyName).catch((err) =>
      console.error('ERROR in Login: ', err)
    );

    // alert(`Welcome ${res.profileObj.name}!!!`);
    console.log('[Successfully logged in!] currentUser:', res.profileObj);
    refreshTokenId(res);
    console.log('logged in?', isLoggedIn);
  };

  const onFailure = (res) => {
    console.info('[Failed to log into MyVote]', res);
  };

  // const trueLogin = () => {
  //   handleLogin();
  //   console.log('hello from true login', isLoggedIn);
  // };

  return (
    <div>
      {/* <BrowserRouter>
        <Link to='/homepage'> */}
      <GoogleLogin
        clientId={clientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        // loginUser={loginUser}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isLoggedIn={true}
      />
      {console.log('can i plz be logged in now', isLoggedIn)}
      {/* </Link>
      </BrowserRouter> */}
    </div>
  );
};

export default GoogleLoginButton;
