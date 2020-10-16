import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import History from '@scripts/base/components/history/history';
import { Dashboard } from '@scripts/finance/views/dashboard/dashboard';
import { Monitor } from '@scripts/finance/views/monitor/monitor';
import { Home } from '@scripts/home/home';
import { SignIn } from '@scripts/user/views/sign-in/sign-in';
import { SignUp } from '@scripts/user/views/sign-up/sign-up';
import { AppRouter } from './router';

describe('App Router', () => {
  function mount(){
    return shallow(<AppRouter />);
  }

  it('should contain a Router', () => {
    const wrapper = mount();
    expect(wrapper.find(Router)).toBeDefined();
  });

  it('should contain a History', () => {
    const wrapper = mount();
    expect(wrapper.find(History).length).toEqual(1);
  });

  it('should contain Home route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(0);
    expect(route.prop('path')).toEqual('/');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Home);
  });

  it('should contain Sign Up route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(1);
    expect(route.prop('path')).toEqual('/sign-up');
    expect(route.prop('component')).toEqual(SignUp);
  });

  it('should contain Sign In route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(2);
    expect(route.prop('path')).toEqual('/sign-in');
    expect(route.prop('component')).toEqual(SignIn);
  });

  it('should contain Dashboard route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(3);
    expect(route.prop('path')).toEqual('/dashboard');
    expect(route.prop('component')).toEqual(Dashboard);
  });

  it('should contain Monitor route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(4);
    expect(route.prop('path')).toEqual('/monitor');
    expect(route.prop('component')).toEqual(Monitor);
  });
});
