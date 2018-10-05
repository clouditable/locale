import React, { Component } from 'react';
import { Query } from 'react-apollo';

import OrdersForm from './OrdersForm';
import { PAST_ORDERS } from '../helpers/queries/past_orders_query';
import Loading from './Loading';

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
            return <Loading />;
          }
          if (data && data.pastOrders && data.pastOrders.length) {
            return (
              <div className="container emp-profile orders px-4" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
                <form>
                  {data.pastOrders.map((order, i) => {
                    return <OrdersForm key={i} order={order} />;
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