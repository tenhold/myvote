import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state ={
      search: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.keyClick = this.keyClick.bind(this);
  }

  handleSearch(e) {

    this.setState({
      search: e.target.value
    });
  }

  keyClick(e) {
    if (e.which === 13) {
      axios.get('/api/users')
        .then(users => {
          console.log('users!!!!!', users);
        })
    }
  }

  render() {
    const { search } = this.state;
    return(
      <Container>
        <Row>
          <input 
            type='text' 
            placeholder='find a friend' 
            value={search} 
            onChange={this.handleSearch} 
            onKeyDown={this.keyClick}
          />
        </Row>
      </Container>
    );
  }
}

export default Friends;