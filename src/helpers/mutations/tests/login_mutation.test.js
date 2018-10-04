import React from 'react';
import '../../../setupTests';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { LoginButton } from '../login_mutation';

describe('<LoginButton />', () => {
  it('should render without error', () => {
    const wrapper = mount((
      <MockedProvider mocks={[]}>
        <LoginButton />
      </MockedProvider>
    ));
    expect(wrapper.text()).toContain('Login');
  });
  it('renders a email input', () => {
    const wrapper = mount((
      <MockedProvider mocks={[]}>
        <LoginButton />
      </MockedProvider>
    ));
    expect(wrapper.find('Button').length).toEqual(1);
  });
});
