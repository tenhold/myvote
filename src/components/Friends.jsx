import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Friends extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <Container>
        <Row>
          <input type='text' placeholder='find a friend' />
        </Row>
      </Container>
    );
  }
}

export default Friends;