import React, { Component, Fragment } from 'react';

class OrdersForm extends Component {
  render() {
    const { order } = this.props;
    const { uid, earnedPoints, restaurant, orderDate, status, total } = order;
    
    return (
      <Fragment>
        <div className="profile-head">
          <h5>
            {uid}
          </h5>
          <p className="proile-rating">POINTS : <span>{earnedPoints}</span></p>
          <hr />
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
  }
}

export default OrdersForm;