//////////////////  import bootstrap  ///////////////////////
import { Container, Row, Col } from 'react-bootstrap';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch,
} from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user: '', // will load the current logged in user unique id ie. _id,
      isLoggedIn: null,
    };
  }

  componentDidMount() {
    // const script = document.createElement('script');
    // script.src = 'http://apis.google.com/js/platform.js';
    // script.onload = () => {
    //   this.initializeGoogelSignIn();
    // };
    // document.body.appendChild(script);
    ////////
    axios.get('/api/users').then((users) => {
      const { data } = users;
      this.setState({
        users: data,
        user: data[0],
      });
    });
  }

  isUserLoggedIn(Component) {
    if (this.state.isLoggedIn === null) {
      return <h1>Hello World state is null</h1>;
    }
    // If the user is logged in, render homepage. If not, render log in page
    return this.state.isLoggedIn ? <Component /> : <Login />;
  }

  render() {
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
          {/* <Route path='/myelection' component={MyElection}></Route> */}
          <Route path='/myelection' render={() => <MyElection user={user} />}></Route>
          <Route path='/mysupport' component={MySupport}></Route>
          <Route path='/logout' component={Logout}></Route>
          <Route path='/homepage' component={Homepage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;

ReactDOM.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);
