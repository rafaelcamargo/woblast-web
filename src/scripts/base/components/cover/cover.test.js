import React from 'react';
import { shallow } from 'enzyme';
import { Cover } from '@scripts/base/components/cover/cover';

describe('Cover', () => {
  function mount(){
    return shallow(
      <Cover />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-cover');
  });
});
