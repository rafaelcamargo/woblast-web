import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from '@scripts/base/components/logo/logo';

describe('Logo', () => {
  function mount(){
    return shallow(
      <Logo />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-logo');
  });
});
