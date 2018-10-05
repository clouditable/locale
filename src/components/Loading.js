import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="container emp-profile" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
        <p className="navbar-text navbar-right">Loading...</p>
      </div>
    )
  }
}

export default Loading;