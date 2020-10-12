import { google } from '../../../server/config/keys.js';
import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenId } from '../../../server/helpers/refreshToken.js';
import createVoterId from '../../../server/helpers/createVoterId';
import newUserCreate from '../../../server/helpers/newUserCreate';

const clientId = google.clientID;

const GoogleLoginButton = ({ isLoggedIn, onSignIn, handleLoginUser }) => {
  const onSuccess = async res => {
    console.log('google res', res);
    const { email, givenName, familyName, googleId } = res.profileObj;
    const createUser = await newUserCreate(
      email,
      googleId,
      givenName,
      familyName
    );

    // const matchGoogleId = createUser.filter(
    //   (user) => user.googleId === googleId
    // );handleLoginUser(createUser);
    console.log('googleId check', createUser.data);
    localStorage.setItem('newUser', JSON.stringify(createUser.data)); // Save the new user to the local storage
    refreshTokenId(res);
    // pass the current user to the index state.
    // handleLoginUser(createUser); // Stores new users to database
    toggleLogin(); // Changes state of isLoggedIn
    console.info('[Successfully logged in!] currentUser:', res.profileObj);
  };

  const onFailure = res => {
    console.info('[Failed to log into MyVote]', res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '500px' }}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginButton;
