import gql from 'graphql-tag'
import { Mutation } from 'react-apollo';
import React from 'react';
import { Button } from 'react-bootstrap';

export const LOGIN_MUTATION = gql`
  mutation ($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password) {
      token
    }
}`;

export const LoginButton = ({ email, password, _confirm, _validate }) => (
  <Mutation
    mutation={LOGIN_MUTATION}
    variables={{ email, password }}
    onCompleted={data => _confirm(data)}
  >
    {mutation => (
      <Button
        className="login-button"
        block
        bsSize="large"
        /*validate: ekle */
        type="submit"
        onClick={mutation}
      >
        Login
          </Button>
    )}
  </Mutation>
);