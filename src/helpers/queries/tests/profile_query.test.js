import React from 'react';
import '../../../setupTests';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Profile from '../../../components/Profile';
import { PROFILE } from '../profile_query';

describe('<Profile />', () => {
  const profileMock = {
    request: { query: PROFILE },
    result: {
      data: {
        "user": {
          "__typename": 'x',
          "addresses": [
            {
              "__typename": 'x',
              "addressLine1": "Sumatra Road, London",
              "addressLine2": "",
              "city": {
                "__typename": 'x',
                "id": 1,
                "name": "London"
              },
              "country": {
                "__typename": 'x',
                "id": 1,
                "isoCode": "GB",
                "name": "England"
              },
              "default": false,
              "flatNumber": "23A",
              "fullName": "",
              "geoEnabled": true,
              "id": 98,
              "lat": 51.550555,
              "long": -0.197608,
              "postalCode": "NW6 1PS",
              "title": "Home"
            }
          ],
          "email": "oliverjones@gmail.com",
          "firstName": "Oliver",
          "lastName": "Jones",
          "mobileNumber": "444709788012",
          "points": 100,
          "uid": "63x53y6vf2"
        }

      }
    },
  };

  it('should render loading state initially', () => {
    const wrapper = mount((
      <MockedProvider mocks={[profileMock]}>
        <Profile />
      </MockedProvider>
    ));

    expect(wrapper.text()).toContain('Loading...');
  });

  it('should render Profile Page with data', async () => {
    const wrapper = mount((
      <MockedProvider mocks={[profileMock]}>
        <Profile />
      </MockedProvider>
    ));

    await wait(0);
    expect(wrapper.text()).toContain('Sumatra Road, London');
    expect(wrapper.text()).toContain('POINTS : 100');
    expect(wrapper.text()).toContain('Oliver Jones');
    expect(wrapper.text()).toContain('63x53y6vf2');
    expect(wrapper.text()).toContain('oliverjones@gmail.com');
    expect(wrapper.text()).toContain('England');
    expect(wrapper.text()).toContain('444709788012');

  });

  it('should render no user found without data', async () => {
    const mockWithoutData = {
      request: { query: PROFILE },
      result: {
        data: {
          user: null
        }
      },
    };

    const wrapper = mount((
      <MockedProvider mocks={[mockWithoutData]}>
        <Profile />
      </MockedProvider>
    ));

    await wait(0);
    expect(wrapper.text()).toContain('No User Found');

  })
});
