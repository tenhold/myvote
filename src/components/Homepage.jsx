import React, { Component } from 'react';
import NavBar from './style-components/NavBar.jsx';
import logoLg from '../../assets/myvote_lg.png';


class Homepage extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   user: ''
    // }
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   const { email } = this.props.user;
  //   axios.get(`/api/users/${email}`)
  //     .then(data => {
  //       this.setState({ user: data.data });
  //     });
  // }

  render() {
    console.log('props homepage', this.props.user)
    const { firstName } = this.props.user;
    return (
      <div className='container'>
        <NavBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <img src={logoLg} />
        </center>
        <p></p>
        <p></p>
        <h1>Welcome {firstName} </h1>
      </div>
    );  
  }
};
// const Homepage = (props) => {
//   console.log('props in homepage', props)
//   return (
//     <div className='container'>
//       <NavBar />
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <center>
//         <img src={logoLg} />
//       </center>
//       <p></p>
//       <p></p>
//       <h1>Welcome {props.users[0].firstName}</h1>
//     </div>
//   );
// };

export default Homepage;
