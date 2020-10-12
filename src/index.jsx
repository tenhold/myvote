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

  useEffect(() => {
    const getNewUser = localStorage.getItem('newUser');
    setUser(JSON.parse(getNewUser));
    // Grab the new user from the local storage
    // Set the state of 'user' to the user that is logged in

    // axios.get('/api/users')
    //   .then(data => {
    //     setUsers(data.data);
    //   });
    //   users.forEach(usr => {
    //     if (usr.email === newUser.email) {
    //       setUser(usr);
    //     }
    //   });
  }, []);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const onSignIn = () => {
    setIsLoggedIn(!isLoggedIn);
    // toggleLogin();
    // const getNewUser = localStorage.getItem('newUser'); // Grab the new user from the local storage
    // console.log('new user', getNewUser);
    // setUser(JSON.parse(getNewUser));
    // Set the state of 'user' to the user that is logged in
  };

  const onSignOut = googleUser => {
    toggleLogin();
    console.log(`Signed out ${googleUser}`);
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
              <Homepage user={user} isLoggedIn={isLoggedIn} />
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
              <Login isLoggedIn={isLoggedIn} onSignIn={onSignIn} />
            )
          }
        ></Route>
        <Route
          path='/homepage'
          render={() => <Homepage isLoggedIn={isLoggedIn} user={user} />}
        ></Route>

        <Route
          path='/myprofile'
          render={() => <MyProfile user={user} />}
        ></Route>
        <Route path='/userform' render={() => <UserForm user={user} />}></Route>
        <Route path='/confirm' render={() => <Confirm user={user} />}></Route>

        <Route
          path='/myelection'
          render={() => <MyElection user={user} />}
        ></Route>
        <Route
          path='/mysupport'
          render={() => <MySupport user={user} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
