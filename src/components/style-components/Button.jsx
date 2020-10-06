 import React from 'react';
import axios from 'axios';



class PledgeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { _id } = this.props.user;
    const { clicked } = this.state;
    if (!clicked) {
      axios.put(`/api/user/${_id}`)
        .then(id => {
          console.log('hello', id)
        })
        .catch(err => console.error('ERROR in axios PUT: ', err));
    }

  }

  render() {
    return (
      <>
        <h3 onClick={this.handleClick}>button</h3>
      </>
    );
  }
}

export default PledgeButton;