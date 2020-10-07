import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, TextField, Button } from '@material-ui/core';

export class FormUserDetails extends Component {
  continue(event) {
    event.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleFields } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter MyProfile Details' />
          <TextField
            name='firstName'
            hintText='Enter Your First Name'
            floatingLabelText='First Name'
            onChange={handleFields('firstName')}
            defaultValue={values.firstName}
          />
          <br></br>
          <TextField
            name='lastName'
            hintText='Enter Your Last Name'
            floatingLabelText='Last Name'
            onChange={handleFields('lastName')}
            defaultValue={values.lastName}
          />
          <br></br>
          <TextField
            name='email'
            hintText='Enter Your Email Address'
            floatingLabelText='Email'
            onChange={handleFields('email')}
            defaultValue={values.email}
          />
          <TextField
            name='address'
            hintText='Enter Your Home Address'
            floatingLabelText='Address'
            onChange={handleFields('address')}
            defaultValue={values.address}
          />
          <TextField
            name='city'
            hintText='Enter Your City'
            floatingLabelText='City'
            onChange={handleFields('city')}
            defaultValue={values.city}
          />
          <TextField
            name='dob'
            hintText='Enter Your Date of Birth'
            floatingLabelText='Date of birth'
            onChange={handleFields('dob')}
            defaultValue={values.dob}
          />
          <TextField
            name='party_affiliation'
            hintText='Enter Your Party'
            floatingLabelText='Party Affiliation'
            onChange={handleFields('party_affiliation')}
            defaultValue={values.party_affiliation}
          />
          <br></br>
          <Button
            label='Continue'
            color='primary'
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
