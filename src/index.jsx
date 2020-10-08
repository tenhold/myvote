//////////////////  import bootstrap  ///////////////////////
import { Container, Row, Col } from 'react-bootstrap';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Friends from './components/Friends.jsx';
import Homepage from './components/Homepage.jsx';
import Logout from './components/Logout.jsx';
import MyBallot from './components/MyBallot.jsx';
import MyElection from './components/MyElection.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx';
import MySupport from './components/MySupport.jsx';
import Login from './components/Login.jsx';
import UserForm from './components/MyProfile/UserForm.jsx';
import PledgeButton from './components/style-components/Button.jsx';
import NavBar from './components/style-components/NavBar.jsx';
import Greeting from './components/style-components/Greeting.jsx';
import logoLg from '../assets/myvote_lg.png';
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
      isLoggedIn: true,
    };
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

  isUserLoggedIn(Component) {
    if (this.state.isLoggedIn === null) {
      return <h1>Hello World state is null</h1>;
    }
    // If the user is logged in, render homepage. If not, render log in page
    return this.state.isLoggedIn ? <Component /> : <Login />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route
            path='/homepage'
            render={() => this.isUserLoggedIn(Homepage)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Index;

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
