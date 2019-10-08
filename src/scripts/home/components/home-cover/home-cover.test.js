import React from 'react';
import { shallow } from 'enzyme';
import { WHomeCover } from '@scripts/home/components/home-cover/home-cover';

describe('Home Cover', () => {
  function mount(){
    return shallow(
      <WHomeCover />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-home-cover');
  });
});
