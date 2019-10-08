import React from 'react';
import { shallow } from 'enzyme';
import { WLogo } from '@scripts/base/components/logo/logo';

describe('Logo', () => {
  function mount(){
    return shallow(
      <WLogo />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-logo');
  });
});
