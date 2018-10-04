import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('<Login />', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toContain('FormGroup');
    expect(wrapper.text()).toContain('Login');
    expect(wrapper.find('#email').length).toEqual(1)
    expect(wrapper.find('#password').length).toEqual(1)
  });
  it('should change state when email input changed', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#email').simulate('change', { target: { id: 'email', value: '3@gmail.com' } });
    expect(wrapper.state('email')).toEqual('3@gmail.com');

  });
  it('should change state when password input changed', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#password').simulate('change', { target: { id: 'password', value: 'myNewPass' } });
    expect(wrapper.state('password')).toEqual('myNewPass');
  });
});
