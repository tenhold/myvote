import React from 'react';
// import ReactDOM from "react-dom";
import moment from 'moment';
import NavBar from './style-components/NavBar.jsx';
import Greeting from './style-components/Greeting.jsx';
import MyProfile from './MyProfile.jsx';
import MyElection from './MyElection.jsx';
import MyBallot from './MyBallot.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import MySupport from './MySupport.jsx';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'homepage', // Default page rendered
    };

    this.changePage = this.changePage.bind(this);
    this.renderSelectedPage = this.renderSelectedPage.bind(this);
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

    // else {
    //   return (
    //     <Login
    //       handleClick={(homepage) => {
    //         this.changePage('homepage', homepage);
    //       }}
    //     />
    //   );
    // }
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <div>
          <Greeting page={page} />
          <NavBar changePage={this.changePage} page={page} />
        </div>
        <h1>
          <center>Welcome to MyVote.</center>
        </h1>
        <h3>
          <center>Election info at your fingertips.</center>
        </h3>
        <div className='main'>{this.renderSelectedPage()}</div>
      </div>
    );
  }
}
