import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails.jsx';
import Confirm from './Confirm.jsx';
import MyProfile from './MyProfile.jsx';

const UserForm = ({ user }) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [party, setParty] = useState('');

  // Proceed to next step in user form
  const nextStep = () => {
    // event.preventDefault();
    setStep(step + 1);
  };
  // Go back to previous step in form
  const previousStep = () => {
    // event.preventDefault();
    setStep(step - 1);
  };

  const handleFields = (input) => (event) => {
    // setFieldsObj({ [input]: event.target.value });
    // forEach the state array and set the value if the key matches the .name
    if (input === 'firstName') {
      setFirstName(event.target.value);
    } else if (input === 'lastName') {
      setLastName(event.target.value);
    } else if (input === 'email') {
      setEmail(event.target.value);
    } else if (input === 'address') {
      setAddress(event.target.value);
    } else if (input === 'dob') {
      setDob(event.target.value);
    } else if (input === 'party') {
      setParty(event.target.value);
    }
    // const test = [event];
    // console.log('test in HF', test);
    // console.log({ [input]: event.target.value });
  };
  console.log('all states', firstName, lastName, email, address, dob, party);
  // console.log('lastName state', lastName);

  const setStateOfInputs = (event) => {
    console.log('oh hello!');
    //   if (event.target.name === 'firstName') {
    //     setFirstName({ ['firstName']: event.target.value });
    //   } else if (event.target.name === 'lastName') {
    //     setLastName({ ['lastName']: event.target.value });
    //   }
    // setEmail({ ['email']: event.target.value });
    // setAddress({ ['address']: event.target.value });
    // setDob({ [event.target.name]: event.target.value });
    // setParty({ [event.target.name]: event.target.value });
  };
  // const { firstName, lastName, email, address, dob, party } = input;

  // console.log('valuesssss', values.firstName);
  // console.log('fname state', firstName);
  // console.log('lastName state', lastName);
  // console.log('input', party, dob);
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          previousStep={previousStep}
          handleFields={handleFields}
          setStateOfInputs={setStateOfInputs}
          // values={values}
          user={user}
          firstName={firstName}
          lastName={lastName}
          email={email}
          address={address}
          dob={dob}
          party={party}
        />
      );

    case 2:
      return (
        <Confirm
          nextStep={nextStep}
          previousStep={previousStep}
          handleFields={handleFields}
          setStateOfInputs={setStateOfInputs}
          user={user}
          firstName={firstName}
          lastName={lastName}
          email={email}
          address={address}
          dob={dob}
          party={party}
        />
      );

    case 3:
      return (
        <MyProfile
          firstName={firstName}
          lastName={lastName}
          email={email}
          address={address}
          dob={dob}
          party={party}
          nextStep={nextStep}
          previousStep={previousStep}
          handleFields={handleFields}
          // values={values}
          user={user}
        />
      );
    case 4:
      return <Success />;
    default:
      console.log('Hello world');
  }
};

export default UserForm;
