//////////////////  import bootstrap  ///////////////////////
import { Container, Row, Col } from 'react-bootstrap';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Friends from './components/Friends.jsx';
import Homepage from './components/Homepage.jsx';
import Login from './components/Login.jsx';
import UserForm from './components/MyProfile/UserForm.jsx';
import PledgeButton from './components/style-components/Button.jsx';
import NavBar from './components/style-components/NavBar.jsx';
import Greeting from './components/style-components/Greeting.jsx';
import logoLg from '../assets/myvote_lg.png';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

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
    axios.get('/api/users').then(users => {
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
      <div className='Index'>
        <CssBaseline />
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
          <Route path='/myprofile' component={UserForm}></Route>
          <Route path='/myballot' component={MyBallot}></Route>
          {/* <Route path='/myelection' component={MyElection}></Route> */}
          <Route
            path='/myelection'
            render={() => <MyElection user={user} />}
          ></Route>
          <Route path='/mysupport' component={MySupport}></Route>
          <Route path='/logout' component={Logout}></Route>
          <Route path='/homepage' component={Homepage} />
        </BrowserRouter>
      </div>
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
