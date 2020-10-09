import { google } from '../../../server/config/keys.js';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  BrowserHistory,
  location,
} from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenId } from '../../../server/helpers/refreshToken.js';
import createVoterId from '../../../server/helpers/createVoterId';

import newUserCreate from '../../../server/helpers/newUserCreate';

const clientId = google.clientID;

const GoogleLoginButton = ({ isLoggedIn, loginUser, onSignIn }) => {
  const onSuccess = (res) => {
    const { email, givenName, familyName, googleId } = res.profileObj;
    newUserCreate(email, googleId, givenName, familyName).catch((err) =>
      console.error('ERROR in Login: ', err)
    );
    onSignIn();
    refreshTokenId(res);
    console.info('[Successfully logged in!] currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.info('[Failed to log into MyVote]', res);
  };

  const trueLogin = () => {
    loginUser();
    console.log('hello from true login', isLoggedIn);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        onClick={() => onSignIn()}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '500px' }}
        isSignedIn={true}
      />
      {console.log('can i plz be logged in now', isLoggedIn)}
    </div>
  );
};

export default GoogleLoginButton;
