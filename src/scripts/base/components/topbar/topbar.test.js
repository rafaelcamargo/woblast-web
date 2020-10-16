import React from 'react';
import { shallow } from 'enzyme';
import userAuthService from '@scripts/user/services/user-auth/user-auth';
import { Link } from 'react-router-dom';
import { Button } from '@scripts/base/components/button/button';
import { Logo } from '@scripts/base/components/logo/logo';
import { Topbar } from '@scripts/base/components/topbar/topbar';

describe('Topbar', () => {
  function mount(props = {}){
    return shallow(
      <Topbar />
    );
  }

  beforeEach(() => {
    userAuthService.logout = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-topbar');
  });

  it('should contain a logo linking to dashboard', () => {
    const wrapper = mount();
    expect(wrapper.find(Logo).length).toEqual(1);
    expect(wrapper.find(Link).prop('to')).toEqual('/dashboard');
  });

  it('should logout on logout button click', () => {
    const wrapper = mount();
    wrapper.find(Button).simulate('click');
    expect(userAuthService.logout).toHaveBeenCalled();
  });
});
