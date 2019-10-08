import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '@scripts/home/home';
import { WHomeCover } from '@scripts/home/components/home-cover/home-cover';

describe('Home Cover', () => {
  function mount(){
    return shallow(
      <Home />
    );
  }

  it('should contain a home cover', () => {
    const wrapper = mount();
    expect(wrapper.find(WHomeCover).length).toEqual(1);
  });
});
