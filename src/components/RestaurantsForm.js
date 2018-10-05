import React, { Component, Fragment } from 'react';

class RestaurantsForm extends Component {
  render() {
    const { restaurant } = this.props;
    const { uid, distance, name, minOrderAmount, types, avgScore } = restaurant;

    return (
      (
        <Fragment>
          <div className="">
            <div className="profile-head">
              <h5>
                {uid}
              </h5>
              <p className="proile-rating">avgScore : <span>{avgScore}</span></p>
              <hr />
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Distance</label>
                  </div>
                  <div className="col-md-6">
                    <p>{distance}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Minimum Order Amount</label>
                  </div>
                  <div className="col-md-6">
                    <p>{minOrderAmount}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Type</label>
                  </div>
                  <div className="col-md-6">
                    {
                      types.length ? types.map((type, z) => {
                        return (
                          <p key={z}>{type.name}</p>
                        )
                      }) : (
                          <p>No Type Found</p>
                        )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>

      )
    )
  }
}

export default RestaurantsForm;