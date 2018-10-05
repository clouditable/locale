import React, { Component } from 'react';
import { LoginButton } from '../helpers/mutations/login_mutation';

import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../stylesheet/Login.css";

const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: [],
    };
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  _confirm = async data => {
    const token = data.loginWithEmail ? data.loginWithEmail.token : '';
    this._saveUserData(token)
    this.props.history.push(`/profile`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="Login" >
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            id="email"
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <LoginButton email={email} password={password} _confirm={this._confirm} _validate={this.validateForm()} />
      </div >
    );
  }
}

export default Login;