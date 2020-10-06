import React from "react";
import logo from '../../../assets/myvote_sm.png';

console.log(logo)

const Greeting = () => (
  <div>
    <ul id="user-greeting">
      <li id="logo">
      <img src={logo} width={200} />
        {/* <h2>MyVote</h2> */}
      </li>
      <li id="greet-message">
        <h2>Welcome, JimBob! [insert badge]</h2>
      </li>
    </ul>
  </div>
);

export default Greeting;
