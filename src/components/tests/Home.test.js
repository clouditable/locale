import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('<Home />', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toContain('please');
    expect(wrapper.text()).toContain('<Link />');
  });
  it('should view welcome message with token', () => {
    const token = "blabla"
    const wrapper = shallow(<Home authed={token} />);
    expect(wrapper.text()).toContain('Welcome');
  });
});
