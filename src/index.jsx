import 'regenerator-runtime/runtime';

import React from 'react';
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

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user: '', // will load the current logged in user unique id ie. _id,
      isLoggedIn: false,
    };
    // this.loginUser = this.loginUser.bind(this);
    // this.logOutUser = this.logOutUser.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
  }

  componentDidMount() {
    axios.get('/api/users').then((users) => {
      const { data } = users;
      this.setState({
        users: data,
        user: data[0],
      });
    });
  }

  toggleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
    console.log('test', this.state.isLoggedIn);
  };

  onSignIn = (googleUser) => {
    this.loginUser();
    // console.log(googleUser);
  };

  onSignOut = (googleUser) => {
    this.toggleLogin();
    console.log(`Signed out ${googleUser}`);
  };

  handleLoginUser = (data) => {
    // update parent component
    
  };

  render() {
    const { isLoggedIn, user, users } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            strict
            render={(props) =>
              this.state.isLoggedIn ? (
                <Homepage
                  // loginUser={this.loginUser()}
                  {...props}
                  isLoggedIn={isLoggedIn}
                />
              ) : (
                <Redirect to='/login' />
              )
            }
          ></Route>

          <Route
            path='/login'
            render={() =>
              this.state.isLoggedIn ? (
                <Redirect to='/homepage' />
              ) : (
                <Login
                  loginUser={this.loginUser}
                  isLoggedIn={this.state.isLoggedIn}
                  onSignIn={this.onSignIn}
                />
              )
            }
          ></Route>
          <Route
            path='/homepage'
            render={(props) => (
              <Homepage
                {...props} 
                loginUser={this.loginUser} 
                isLoggedIn={isLoggedIn} 
                users={users}  
              />
            )}
          ></Route>

          <Route
            path='/myprofile'
            render={() => <MyProfile user={user} />}
          ></Route>
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

export default Index;

ReactDOM.render(
  <Index />,

  document.getElementById('root')
);
