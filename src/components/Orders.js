import React, { Component, Fragment } from 'react';
import { PAST_ORDERS } from '../helpers/queries/past_orders_query';
import { Query } from 'react-apollo';

class PastOrders extends Component {
  _getQueryVariables = () => {
    const limit = 10;
    const index = 1;

    return { index, limit }
  }
  render() {
    return (
      <Query query={PAST_ORDERS} fetchPolicy="cache-and-network" variables={this._getQueryVariables()}>
        {({ loading, data }) => {
          if (loading) {
            return <p className="navbar-text navbar-right">Loading...</p>;
          }
          if (data && data.pastOrders && data.pastOrders.length) {
            return (
              <div className="container emp-profile orders" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
                <form>
                  {data.pastOrders.map((order, i) => {
                    const { uid, earnedPoints, restaurant, orderDate, status, total } = order;
                    return (
                      <Fragment key={i}>
                        <div className="">
                          <div className="profile-head">
                            <h5>
                              {i + 1} - {uid}
                            </h5>
                            <p className="proile-rating">POINTS : <span>{earnedPoints}</span></p>
                            <hr />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Restaurant</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{restaurant.name}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Status</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{status}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Order Date</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{orderDate}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Total</label>
                                </div>
                                <div className="col-md-6">
                                  <p>{total}</p>
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
                <p>No Order Found</p>
              </div>
            )
          }
        }}
      </Query>
    );
  }
}

export default PastOrders;