import React, { Component } from 'react';
import { Query } from 'react-apollo';

import RestaurantsForm from './RestaurantsForm'
import { RESTAURANTS } from '../helpers/queries/restaurants_query';
import Loading from './Loading';

class Restaurants extends Component {
  _getQueryVariables = () => {
    const limit = 10,
      index = 1,
      delivery = false,
      showOffline = true,
      userAddressId = localStorage.getItem('addressId');
    return { index, limit, delivery, showOffline, userAddressId }
  }
  render() {
    return (
      <Query query={RESTAURANTS} fetchPolicy="cache-and-network" variables={this._getQueryVariables()}>
        {({ loading, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (data && data.restaurants && data.restaurants.length) {
            return (
              <div className="container emp-profile px-4" style={{ padding: "150px 0", margin: "0 auto", maxWidth: "320" }}>
                <form>
                  {data.restaurants.map((restaurant, i) => {
                    return <RestaurantsForm key={i} restaurant={restaurant} />;
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