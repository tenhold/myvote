import { google } from '../../../server/config/keys.js';

import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = google.clientID;

const GoogleLoginButton = () => {
  const onSuccess = (res) => {
    console.log('[Successfully logged in!] currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[Failed to log into MyVote]', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '200px' }}
        isLoggedIn={true}
      />
    </div>
  );
};

export default GoogleLoginButton;
