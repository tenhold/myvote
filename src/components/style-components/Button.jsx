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
    console.log('ID????????', _id);
    const { clicked } = this.state;
      axios.patch(`/api/users/${_id}`)
        .then(user => {
          console.log('hello', user)
        })
        .catch(err => console.error('ERROR in axios PATCH: ', err));

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