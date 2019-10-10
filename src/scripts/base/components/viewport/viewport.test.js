import React from 'react';
import { shallow } from 'enzyme';
import authService from '@scripts/auth/services/auth/auth';
import routeService from '@scripts/base/services/route/route';
import { WTopbar } from '@scripts/base/components/topbar/topbar';
import { WViewport } from '@scripts/base/components/viewport/viewport';

describe('Viewport', () => {
  function mount(props = {}){
    return shallow(
      <WViewport hideTopbar={ props.hideTopbar }>
        { props.content }
      </WViewport>
    );
  }

  beforeEach(() => {
    authService.isAuthenticated = jest.fn();
    routeService.go = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-viewport');
  });

  it('should contain a topbar', () => {
    const wrapper = mount();
    expect(wrapper.find(WTopbar).length).toEqual(1);
  });

  it('should optionally hide topbar', () => {
    const wrapper = mount({ hideTopbar: true });
    expect(wrapper.find(WTopbar).length).toEqual(0);
  });

  it('should redirect to dashboard if user is authenticated and sign up is the pathname', () => {
    authService.isAuthenticated = jest.fn(() => true);
    routeService.getPathname = jest.fn(() => '/sign-up');
    const wrapper = mount();
    expect(routeService.go).toHaveBeenCalledWith('/dashboard');
  });

  it('should redirect to dashboard if user is authenticated and sign in is the pathname', () => {
    authService.isAuthenticated = jest.fn(() => true);
    routeService.getPathname = jest.fn(() => '/sign-in');
    const wrapper = mount();
    expect(routeService.go).toHaveBeenCalledWith('/dashboard');
  });

  it('should not redirect to dashboard if user is authenticated and pathname is not sign up nor sign in', () => {
    authService.isAuthenticated = jest.fn(() => true);
    routeService.getPathname = jest.fn(() => '/dashboard');
    const wrapper = mount();
    expect(routeService.go).not.toHaveBeenCalled();
  });

  it('should not redirect to dashboard if user is not authenticated', () => {
    authService.isAuthenticated = jest.fn();
    const wrapper = mount();
    expect(routeService.go).not.toHaveBeenCalled();
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});
