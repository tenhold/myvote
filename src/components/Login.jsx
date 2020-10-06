import React from 'react';
import NavBar from '../components/style-components/NavBar.jsx';

const Login = () => (
  <div className='login-form'>
    <form>
      <label>
        Email:
        <input type='text' name='name' />
      </label>
      <p></p>
      <label>
        Password:
        <input type='text' name='name' />
      </label>
      <input type='submit' value='Submit' />
    </form>
    <main>
      <a className='google-btn' href='/auth/google'>
        Google+
      </a>
    </main>
  </div>
);

export default Login;
