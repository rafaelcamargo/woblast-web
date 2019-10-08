import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { AppRouter } from './router';
import { Home } from '@scripts/home/home';

describe('App Router', () => {
  function mount(){
    return shallow(<AppRouter />);
  }

  it('should contain a Router', () => {
    const wrapper = mount();
    expect(wrapper.find(Router)).toBeDefined();
  });

  it('should contain Home route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(0);
    expect(route.prop('path')).toEqual('/');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Home);
  });
});
