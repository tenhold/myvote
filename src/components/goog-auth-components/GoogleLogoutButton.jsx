import { google } from '../../../server/config/keys.js';

import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = google.clientID;

const GoogleLogoutButton = () => {
  const onSuccess = () => {
    alert('Succesfully logged out of MyVote ✌️ 🇺🇸');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default GoogleLogoutButton;
