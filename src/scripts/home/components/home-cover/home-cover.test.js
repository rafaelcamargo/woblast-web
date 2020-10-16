import React from 'react';
import { shallow } from 'enzyme';
import { HomeCover } from '@scripts/home/components/home-cover/home-cover';

describe('Home Cover', () => {
  function mount(){
    return shallow(
      <HomeCover />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-home-cover');
  });
});
