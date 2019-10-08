import React from 'react';
import { shallow } from 'enzyme';
import { WCover } from '@scripts/base/components/cover/cover';

describe('Cover', () => {
  function mount(){
    return shallow(
      <WCover />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-cover');
  });
});
