import React, { Component } from 'react';

class ProfileForm extends Component {
  render() {
    const { user } = this.props;
    const { addresses, email, firstName, lastName, mobileNumber, points, uid } = user;
    const addressIds = addresses.map(add => add.id);
    localStorage.setItem(process.env.REACT_APP_ADDRESS_ID, addressIds);

    return (
      <div className="container emp-profile px-4" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
        <div className="profile-head">
          <h5>
            {firstName} {lastName}
          </h5>
          <p className="proile-rating">POINTS : <span>{points}</span></p>
          <hr />
        </div>
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>User Id</label>
                </div>
                <div className="col-md-6">
                  <p>{uid}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <p>{mobileNumber}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Adresses</label>
                </div>
                <div className="col-md-6">
                  {addresses.map((add, i) => {
                    return <p key={i}>{`${add.addressLine1} / ${add.city.name} / ${add.country.name}`}</p>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileForm;