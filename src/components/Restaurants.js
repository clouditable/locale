import React, { Component, Fragment } from 'react';
import { RESTAURANTS } from '../helpers/queries/restaurants_query';
import { Query } from 'react-apollo';

class Restaurants extends Component {
  _getQueryVariables = () => {
    const limit = 10,
      index = 1,
      delivery = false,
      showOffline = true,
      userAddressId = localStorage.getItem('addressId');
    return { index, limit, delivery, showOffline, userAddressId}
  }
  render() {
    return (
      <Query query={RESTAURANTS} fetchPolicy="cache-and-network" variables={this._getQueryVariables()}>
        {({ loading, data }) => {
          if (loading) {
            return <p className="navbar-text navbar-right">Loading...</p>;
          }
          if (data && data.restaurants && data.restaurants.length) {
            return (
              <div className="container emp-profile" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
                <form>
                  {data.restaurants.map((order, i) => {
                    const { uid, distance, name, minOrderAmount, types, avgScore } = order;
                    return (
                      <Fragment key={i}>
                        <div className="">
                          <div className="profile-head">
                            <h5>
                              {i + 1} - {uid}
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
                  })
                  }
                </form>
              </div>
            )
          } else {
            return (
              <div className="container emp-profile" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
                <div>No Restaurant Found</div>
              </div>
            )
          }
        }}
      </Query>
    );
  }
}

export default Restaurants;