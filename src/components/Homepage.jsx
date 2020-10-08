// import React from 'react';

//////////////////  import bootstrap  ///////////////////////
import { Container, Row, Col } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import moment from 'moment';
import NavBar from './style-components/NavBar.jsx';
import logoLg from '../../assets/myvote_lg.png';

const Homepage = ({ page, user, users }) => {
  return (
    <div className='container'>
      {/* <Greeting user={user} users={users} /> */}
      <NavBar />
      <br></br>
      {/* <div> */}
      <center>
        <img src={logoLg} />
      </center> 
      {/* <Container className='pledge' fluid='sm'>
        <Row>
          <Col>
            <PledgeButton user={user} />
          </Col>
          <Col>
            <Friends users={users} />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Homepage;
