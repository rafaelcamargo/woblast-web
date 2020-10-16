import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '@scripts/base/components/container/container';

describe('Container', () => {
  function mount(){
    return shallow(
      <Container />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-container');
  });
});
