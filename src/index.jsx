import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';
import MyBallot from './components/MyBallot.jsx';
import MyElection from './components/MyElection.jsx';
import UserForm from './components/MyProfile/UserForm.jsx';
import MySupport from './components/MySupport.jsx';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user: '', // will load the current logged in user unique id ie. _id,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    axios.get('/api/users').then((users) => {
      const { data } = users;
      this.setState({
        users: data,
        user: data[0],
        // isLoggedin: true,
      });
    });
  }

  // isUserLoggedIn = (Component) => {
  //   // if (this.state.isLoggedIn === null) {
  //   //   return <h1>Hello World state is null</h1>;
  //   // }
  //   // If the user is logged in, render homepage. If not, render log in page
  //   return this.state.isLoggedIn ? <Redirect to='/homepage'></Redirect> : <Login />;
  // };

  loginUser = () => {
    this.setState({
      isLoggedIn: true,
    });
    console.log(this.props)
    console.log('This user is now logged in!', this.state.isLoggedIn);
  };

  render() {
    const { page, user, users } = this.state;
    // return (
    // <div className='Index'>
    //   {/* <Greeting page={page} user={user} /> */}
    //   <br></br>
    //   <Router>
    //     <NavBar />
    //       <Route path='/login' component={Login}></Route>
    //       <Route path='/homepage' component={Homepage}></Route>
    //       <Route path='/myprofile' render={() => <UserForm user={user} />}></Route>
    //       <Route path='/myballot' component={MyBallot}></Route>
    //       <Route path='/myelection' render={() => <MyElection user={user} />}></Route>
    //       <Route path='/mysupport' component={MySupport}></Route>
    //       <Route path='/logout' component={Logout}></Route>
    //   </Router>
    // </div>
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/'>
            {isLoggedIn ? (
              <Redirect to='/homepage' component={Homepage} />
            ) : (
              <Login
                handleLogin={this.loginUser.bind(this)}
                isLoggedIn={isLoggedIn}
              /> */}
          {/* )} */}
          {/* <Login
              handleLogin={this.loginUser.bind(this)}
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route
            path='/homepage'
            render={(component) => this.isUserLoggedIn(Homepage)}
          /> */}
          {/* </Route> */}
          <Route
            exact
            path='/'
            render={() => {
              return isLoggedIn ? (
                <Redirect to='/homepage' />
              ) : (
                <Redirect to='/login' />
              );
            }}
          />
          <Route exact path='/homepage' component={Homepage} />
          <Route
            exact
            path='/login'
            render={() => (
              <Login
                isLoggedIn={isLoggedIn}
                handleLogin={this.loginUser.bind(this)}
              />
            )}
          />
          <Route path='/myprofile' render={() => <UserForm user={user} />}></Route>
          <Route path='/myballot' component={MyBallot}></Route>
          <Route path='/myelection' render={() => <MyElection user={user} />}></Route>
          <Route path='/mysupport' component={MySupport}></Route>
        </Switch>
      </BrowserRouter>
    );
    // )
  }
}

export default Index;

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
