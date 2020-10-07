//////////////////  import bootstrap  ///////////////////////
import { Container, Row, Col } from 'react-bootstrap';

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

    axios
      .get('https://api.wevoteusa.org/apis/v1/deviceIdGenerate')
      .then((voterInfo) => {
        const { voter_device_id } = voterInfo.data;
        console.log('voter info', voter_device_id);
      });
  }

  render() {
    const { page, user, users } = this.state;

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
          <Route path='/myprofile' component={UserForm}></Route>
          <Route path='/myballot' component={MyBallot}></Route>
          <Route path='/myelection' component={MyElection}></Route>
          <Route path='/mysupport' component={MySupport}></Route>
          <Route path='/logout' component={Logout}></Route>
          <Route path='/homepage' component={Homepage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
