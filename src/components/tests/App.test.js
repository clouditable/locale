import React from 'react';
import '../../setupTests';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { MemoryRouter } from 'react-router';
import Home from '../Home';
import Header from '../Header';

describe('<App />', () => {
  it('should render without error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).toEqual('div')
    expect(wrapper.text()).toContain('Header');
    expect(wrapper.text()).toContain('Switch');
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('should view base routes without token', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('Login');
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
