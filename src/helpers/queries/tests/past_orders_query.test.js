import React from 'react';
import '../../../setupTests';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import PastOrders from '../../../components/Orders';
import { PAST_ORDERS } from '../past_orders_query';

describe('<PastOrders />', () => {
  const pastOrdersMock = {
    request: { query: PAST_ORDERS },
    result: {
      data: {
        "pastOrders": [
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
      <MockedProvider mocks={[pastOrdersMock]}>
        <PastOrders />
      </MockedProvider>
    ));

    expect(wrapper.text()).toContain('Loading...');
  });

  it('should render past orders with data', async () => {
    const wrapper = mount((
      <MockedProvider mocks={[pastOrdersMock]}>
        <PastOrders />
      </MockedProvider>
    ));

    await wait(1000);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render no past orders found without data', async () => {
    const mockWithoutData = {
      request: { query: PAST_ORDERS },
      result: {
        data: {
          pastOrders: null
        }
      },
    };

    const wrapper = mount((
      <MockedProvider mocks={[mockWithoutData]}>
        <PastOrders />
      </MockedProvider>
    ));

    await wait(3);
    expect(wrapper.text()).toContain('No Order Found');

  })
});
