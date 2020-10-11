import React, { useState } from 'react';
import NavBar from './style-components/NavBar.jsx';
import ElectionCountdown from '../components/style-components/ElectionCountdown.jsx';
import logoLg from '../../assets/myvote_lg.png';

const Homepage = ({ user }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  console.log('user on the homepage', user);
  return (
    <div className='container'>
      <NavBar />
      {!user && <div>Loading name...</div>}
      {user && <h1>Welcome {user.firstName}</h1>}
      <center>
        <img src={logoLg} />
      </center>
      <ElectionCountdown />
    </div>
  );
};

// class Homepage extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log('props homepage', this.props.user);
//     const { firstName } = this.props.user;
//     return (
//       <div className='container'>
//         <NavBar />
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <center>
//           <img src={logoLg} />
//         </center>
//         <p></p>
//         <p></p>
//         <h1>Welcome {firstName} </h1>
//         <ElectionCountdown />
//       </div>
//     );
//   }
// }

export default Homepage;
