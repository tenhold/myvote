import 'regenerator-runtime/runtime';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';
import MyBallot from './components/MyBallot.jsx';
import MySupport from './components/MySupport.jsx';
import MyElection from './components/MyElection.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx';
import Logout from './components/Logout.jsx';
import UserForm from './components/MyProfile/UserForm.jsx';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const Index = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [test, setTest] = useState('');

  const testFunc = () => {
    console.log('in test func: ', user);
  };

  useEffect((user) => {
    const getNewUser = localStorage.getItem('newUser'); // Grab the new user from the local storage
    setUser(JSON.parse(getNewUser)); // Set the state of 'user' to the user that is logged in
    console.log(getNewUser)
  }, []);

  const toggleLogin = () => {
    // setUser(user);
    setIsLoggedIn(!isLoggedIn);
  };

  const onSignIn = () => {
    toggleLogin();
    const getNewUser = localStorage.getItem('newUser'); // Grab the new user from the local storage
    console.log('new user', getNewUser);
    setUser(JSON.parse(getNewUser)); // Set the state of 'user' to the user that is logged in
    testFunc();
  };

  const onSignOut = (googleUser) => {
    toggleLogin();
    console.log(`Signed out ${googleUser}`);
  };

  const handleLoginUser = (user) => {
    setUser(user.givenName);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          exact
          strict
          render={() =>
            isLoggedIn ? (
              <Homepage
                user={user}
                isLoggedIn={isLoggedIn}
                handleLoginUser={handleLoginUser}
              />
            ) : (
              <Redirect to='/login' />
            )
          }
        ></Route>

        <Route
          path='/login'
          render={() =>
            isLoggedIn ? (
              <Redirect to='/homepage' />
            ) : (
              <Login
                isLoggedIn={isLoggedIn}
                onSignIn={onSignIn}
                handleLoginUser={handleLoginUser}
              />
            )
          }
        ></Route>
        <Route
          path='/homepage'
          render={() => <Homepage isLoggedIn={isLoggedIn} user={user} />}
        ></Route>

        <Route path='/myprofile' render={() => <MyProfile />}></Route>
        <Route path='/userform' render={() => <UserForm />}></Route>
        <Route
          path='/myelection'
          render={() => <MyElection user={user} />}
        ></Route>
        <Route path='/mysupport' component={MySupport}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
