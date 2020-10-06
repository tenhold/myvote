import React from "react";
// import ReactDOM from "react-dom";
import moment from "moment";
import NavBar from "./style-components/NavBar.jsx";
import Greeting from "./style-components/Greeting.jsx";
import logoLg from '../../assets/myvote_lg.png';

// export default class Homepage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isClicked: true,
//     };

//     // Helper functions here
//   }
//   //compoundDidMount
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <h1>Welcome to MyVote!</h1>
//       </div>
//     );
//   }
// }

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
    };
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <Greeting />
          <NavBar />
        </div>
          <center><img src={logoLg} /></center>
        {/* <h1>
          <center>Welcome to MyVote.</center>
        </h1> */}
        {/* <h3>
          <center>Election info at your fingertips.</center>
        </h3> */}
      </div>
    );
  }
}
