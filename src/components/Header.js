import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

//.env'den al
const AUTH_TOKEN = 'auth-token';

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#TopNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="TopNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            {authToken ? (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/orders">Past Orders</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/restaurants">Restaurants</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item"
                  onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN)
                    localStorage.removeItem('addressId');
                    this.props.history.push(`/`)
                  }}
                >
                  <NavLink className="nav-link" to="#">Logout</NavLink>
                </li>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                </React.Fragment>
              )}
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
