// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles.scss';
// import Homepage from './components/Homepage.jsx';
// import Login from './components/Login.jsx';

// ReactDOM.render(<Login />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.jsx';
import Logout from './components/Logout.jsx';
import MyBallot from './components/MyBallot.jsx';
import MyElection from './components/MyElection.jsx';
import MyProfile from './components/MyProfile.jsx';
import MySupport from './components/MySupport.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'homepage', // Default page rendered
    };

    // this.changePage = this.changePage.bind(this);
    // this.renderSelectedPage = this.renderSelectedPage.bind(this);
  }

  //   changePage(option) {
  //     this.setState({
  //       page: option,
  //     });
  //   }

  //   renderSelectedPage() {
  //     const { page } = this.state;
  //     if (page === 'login') {
  //       return <Login changePage={this.changePage} />;
  //     } else if (page === 'myProfile') {
  //       return <MyProfile changePage={this.changePage} />;
  //     } else if (page === 'myElection') {
  //       return <MyElection changePage={this.changePage} />;
  //     } else if (page === 'myBallot') {
  //       return <MyBallot changePage={this.changePage} />;
  //     } else if (page === 'mySupport') {
  //       return <MySupport changePage={this.changePage} />;
  //     } else if (page === 'logout') {
  //       return <Logout />;
  //     } else if (page === 'signup') {
  //       return <Signup changePage={this.changePage} />;
  //     }
  //   }
  render() {
    return (
      <BrowserRouter>
        <div className='Index'>
          <NavBar />
          <Route path='/homepage' component={Homepage}></Route>
          <Route path='/myprofile' component={MyProfile}></Route>
          <Route path='/myballot' component={MyBallot}></Route>
          <Route path='/myelection' component={MyElection}></Route>
          <Route path='/mysupport' component={MySupport}></Route>
          <Route path='/logout' component={Logout}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default Index;

ReactDOM.render(<Login />, document.getElementById('root'));
