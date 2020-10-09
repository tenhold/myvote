import { google } from '../../../server/config/keys.js';

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenId } from '../../../server/helpers/refreshToken.js';

const clientId = google.clientID;

const GoogleLoginButton = ({ isLoggedIn, trueLogin }) => {
  const onSuccess = (res) => {
    console.log('[Successfully logged in!] currentUser:', res.profileObj);

    alert(`Welcome ${res.profileObj.name}!!!`);
    refreshTokenId(res);
    trueLogin();
    console.log('logged in?', isLoggedIn);
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
        onClick={() => trueLogin()}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isLoggedIn={true}
      />
    </div>
  );
};

export default GoogleLoginButton;
