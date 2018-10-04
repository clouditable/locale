import React, { Component } from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Restaurants from './Restaurants';
import Orders from './Orders';
import Profile from './Profile';

const AUTH_TOKEN = 'auth-token';
const authToken = localStorage.getItem(AUTH_TOKEN);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route {...rest} render={(props) => {
    props['token'] = authToken;
    return (authToken
      ? <Component {...props} />
      : <Redirect to='/login' />)
  }

  } />)
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={props => <Home authToken={authToken} />} />
          <PrivateRoute path="/restaurants" component={Restaurants} />
          <PrivateRoute path="/orders" component={Orders} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>

    );
  }
}

export default App