import React from 'react';
import { shallow } from 'enzyme';
import userAuthService from '@scripts/user/services/user-auth/user-auth';
import routeService from '@scripts/base/services/route/route';
import { Topbar } from '@scripts/base/components/topbar/topbar';
import { Viewport } from '@scripts/base/components/viewport/viewport';

describe('Viewport', () => {
  function mount(props = {}){
    return shallow(
      <Viewport hideTopbar={ props.hideTopbar }>
        { props.content }
      </Viewport>
    );
  }

  beforeEach(() => {
    userAuthService.isAuthenticated = jest.fn();
    routeService.go = jest.fn();
    routeService.getPathname = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-viewport');
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.find(Topbar).length).toEqual(1);
  });

  it('should optionally hide topbar', () => {
    const wrapper = mount({ hideTopbar: true });
    expect(wrapper.find(Topbar).length).toEqual(0);
  });

  it('should redirect to dashboard if user is authenticated and sign up is the pathname', () => {
    userAuthService.isAuthenticated = jest.fn(() => true);
    routeService.getPathname = jest.fn(() => '/sign-up');
    const wrapper = mount();
    expect(routeService.go).toHaveBeenCalledWith('/dashboard');
  });

  it('should redirect to dashboard if user is authenticated and sign in is the pathname', () => {
    userAuthService.isAuthenticated = jest.fn(() => true);
    routeService.getPathname = jest.fn(() => '/sign-in');
    const wrapper = mount();
    expect(routeService.go).toHaveBeenCalledWith('/dashboard');
  });

  it('should not redirect to dashboard if user is authenticated and pathname is not sign up nor sign in', () => {
    userAuthService.isAuthenticated = jest.fn(() => true);
    routeService.getPathname = jest.fn(() => '/dashboard');
    const wrapper = mount();
    expect(routeService.go).not.toHaveBeenCalled();
  });

  it('should not redirect to dashboard if user is not authenticated and pathname is public', () => {
    userAuthService.isAuthenticated = jest.fn();
    routeService.getPathname = jest.fn(() => '/');
    const wrapper = mount();
    expect(routeService.go).not.toHaveBeenCalled();
  });

  it('should redirect to sign in if user is not authenticated and pathname is not public', () => {
    userAuthService.isAuthenticated = jest.fn();
    routeService.getPathname = jest.fn(() => '/dashboard');
    const wrapper = mount();
    expect(routeService.go).toHaveBeenCalledWith('/sign-in');
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});
