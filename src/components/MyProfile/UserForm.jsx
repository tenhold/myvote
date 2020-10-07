import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails.jsx';

export class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      dob: '',
      party_affiliation: '',
      badge: '',
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.handleFields = this.handleFields.bind(this);
  }

  // Proceed to next step in user form
  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }
  // Go back to previous step in form
  previousStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  handleFields = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      address,
      city,
      dob,
      party_affiliation,
      badge,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      address,
      city,
      dob,
      party_affiliation,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleFields={this.handleFields}
            values={values}
          />
        );

      case 2:
        return <h1>FormPersonalDetails</h1>;

      case 3:
        return <h1>Confirm</h1>;

      case 4:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
