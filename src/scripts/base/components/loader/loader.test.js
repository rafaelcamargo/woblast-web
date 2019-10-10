import React from 'react';
import { shallow } from 'enzyme';
import { WLoader } from '@scripts/base/components/loader/loader';

describe('Loader', () => {
  function mount(props = {}){
    return shallow(
      <WLoader />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-loader');
  });
});
