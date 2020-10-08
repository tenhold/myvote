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

  render() {
    const { isLoggedIn, user } = this.state;
    return (
      <div className='Index'>
        {/* <Greeting page={page} user={user} /> */}
        {/* <NavBar /> */}
        <br></br>
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/homepage'>Home</Link>
              </li>
              <li>
                <Link to='/myprofile'>MyProfile</Link>
              </li>
              <li>
                <Link to='/myballot'>MyBallot</Link>
              </li>
              <li>
                <Link to='/myelection'>MyElection</Link>
              </li>
              <li>
                <Link to='/mysupport'>MySupport</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
          </div>
          <Route path='/login' component={Login}></Route>
          <Route path='/homepage' component={Homepage}></Route>
          {/* <Route path='/myprofile' component={UserForm}></Route> */}
          <Route path='/myprofile' render={() => <UserForm user={user} />}></Route>
          <Route path='/myballot' component={MyBallot}></Route>
          <Route path='/userform' component={UserForm}></Route>
          <Route
            path='/myelection'
            render={() => <MyElection user={user} />}
          ></Route>
          <Route path='/mysupport' component={MySupport}></Route>
          <Route path='/logout' component={Logout}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
        <Route path='/mysupport' component={MySupport}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
