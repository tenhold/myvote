import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails.jsx';
import Confirm from './Confirm.jsx';
import MyProfile from './MyProfile.jsx';

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
      state: '',
      zipcode: '',
      dob: '',
      party_affiliation: '',
      badge: '',
    };

    

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.handleFields = this.handleFields.bind(this);
  }

  // Proceed to next step in user form
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Go back to previous step in form
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleFields = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { user } = this.props;
    const {
      firstName,
      lastName,
      email,
      address,
      city,
      state,
      zipcode,
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
      state,
      zipcode,
      dob,
      party_affiliation,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleFields={this.handleFields}
            values={values}
          />
        );

      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleFields={this.handleFields}
            values={values}
            user={user}
          />
        );

      case 3:
        return (
          <MyProfile
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            address={this.state.address}
            city={this.state.city}
            state={this.state.state}
            zipcode={this.state.zipcode}
            dob={this.state.dob}
            party_affiliation={this.state.party_affiliation}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleFields={this.handleFields}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        console.log('Hello world');
    }
  }
}

export default UserForm;
