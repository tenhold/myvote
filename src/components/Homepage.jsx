import React from 'react';
// import ReactDOM from "react-dom";
import moment from 'moment';
import axios from 'axios';
import NavBar from './style-components/NavBar.jsx';
import Greeting from './style-components/Greeting.jsx';
import MyProfile from './MyProfile.jsx';
import MyElection from './MyElection.jsx';
import MyBallot from './MyBallot.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import MySupport from './MySupport.jsx';
import PledgeButton from './style-components/Button.jsx';
import logoLg from '../../assets/myvote_lg.png';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'homepage', // Default page rendered
      rating: null,
      users: [],
      user: '' // will load the current logged in user unique id ie. _id
    };

    this.changePage = this.changePage.bind(this);
    this.renderSelectedPage = this.renderSelectedPage.bind(this);
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(users => {
        const { data } = users;
        this.setState({
          users: data,
          user: data[0]
        });
      });

    axios.get('https://api.wevoteusa.org/apis/v1/deviceIdGenerate')
      .then(voterInfo => {
        const { voter_device_id } = voterInfo.data;
        console.log('voter info', voter_device_id)
      })
  }

  changePage(option) {
    this.setState({
      page: option,
    });
  }

  renderSelectedPage() {
    const { page } = this.state;
    if (page === 'login') {
      return <Login changePage={this.changePage} />;
    } else if (page === 'myProfile') {
      return <MyProfile changePage={this.changePage} />;
    } else if (page === 'myElection') {
      return <MyElection changePage={this.changePage} />;
    } else if (page === 'myBallot') {
      return <MyBallot changePage={this.changePage} />;
    } else if (page === 'mySupport') {
      return <MySupport changePage={this.changePage} />;
    } else if (page === 'logout') {
      return <Logout />;
    } else if (page === 'signup') {
      return <Signup changePage={this.changePage} />;
    }
  }
  render() {
    const { page, user } = this.state;
    return (
      <div>
        <div>
          <Greeting page={page} user={user} />
          <NavBar changePage={this.changePage} page={page} />
        </div>
        <div>
          <center><img src={logoLg} /></center>
        </div>
        <PledgeButton user={user} />
      </div>
      
    );
  }
}
