import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const { authToken } = this.props;
    return (
      <div className="jumbotron jumbotron-fluid" style={{ padding: "150px" }}>
        <div className="container">

          {authToken ? (
            <p>Welcome</p>
          ) :
            <p>please <Link to="/login">Login</Link></p>
          }
        </div>
      </div>
    );
  }
}

export default Home;