import { google } from '../../../server/config/keys.js';

import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = google.clientID;

const GoogleLogoutButton = ({ onSignOut }) => {
  const onSuccess = () => {
    onSignOut();
    alert('signed outtttt');
    console.info('You are logged out. Happy Voting!');
  };

  const onFailure = () => {
    console.error('Problem signing out.');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onSuccess={onSuccess}
        onFailure={onFailure}
        onClick={() => onSignOut()}
        isSignedIn={false}
      ></GoogleLogout>
    </div>
  );
};

export default GoogleLogoutButton;
