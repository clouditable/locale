import React from 'react';
import '../../../setupTests';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Restaurants from '../../../components/Restaurants';
import { RESTAURANTS } from '../restaurants_query';

describe('<Restaurants />', () => {
  const restaurantsMocks = {
    request: { query: RESTAURANTS },
    result: {
      data: {
        "restaurants": [
          {
            "deliveryType": "DELIVERY",
            "earnedPoints": 786,
            "orderDate": "2018-09-28T08:46:53.000Z",
            "restaurant": {
              "name": "Regano"
            },
            "status": "ORDER_CHECK_TIMEOUT",
            "total": 261.94,
            "uid": "MAG7D"
          }
        ]
      },
    }
  };

  it('should render loading state initially', () => {
    const wrapper = mount((
      <MockedProvider mocks={[restaurantsMocks]}>
        <Restaurants />
      </MockedProvider>
    ));

    expect(wrapper.text()).toContain('Loading...');
  });

  it('should render restaurants with data', async () => {
    const wrapper = mount((
      <MockedProvider mocks={[restaurantsMocks]}>
        <Restaurants />
      </MockedProvider>
    ));

    await wait(1000);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render no restaurant orders found without data', async () => {
    const mockWithoutData = {
      request: { query: RESTAURANTS },
      result: {
        data: {
          restaurants: null
        }
      },
    };

    const wrapper = mount((
      <MockedProvider mocks={[mockWithoutData]}>
        <Restaurants />
      </MockedProvider>
    ));

    await wait(3);
    expect(wrapper.text()).toContain('No Restaurant Found');

  })
});
