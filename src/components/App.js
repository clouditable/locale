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


const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest)
  return React.createElement(component, finalProps)
}

const PrivateRoute = ({ component, ...rest }) => {
  const authed = localStorage.getItem('auth-token');
  return (
    <Route
      {...rest}
      render={routeProps =>
        authed ? (
          renderMergedProps(component, routeProps, rest)
        ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: routeProps.location } }}
            />
          )}
    />
  )
}

const PublicRoute = ({ component, ...rest }) => {
  const authed = localStorage.getItem('auth-token');
  return (
    <Route
      {...rest}
      render={routeProps => {
        return renderMergedProps(component, routeProps, rest, { authed: authed })
      }}
    />
  )
};

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PrivateRoute path="/restaurants" component={Restaurants} />
          <PrivateRoute path="/orders" component={Orders} />
          <PrivateRoute path="/profile" component={Profile} />
          <PublicRoute exact path="/login" component={Login} />
        </Switch>
      </div>

    );
  }
}

export default App