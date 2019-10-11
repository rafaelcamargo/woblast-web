import React from 'react';
import { shallow } from 'enzyme';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { Monitor } from '@scripts/monitor/monitor';

describe('Monitor', () => {
  function mount(){
    return shallow(
      <Monitor />
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(WViewport).length).toEqual(1);
  });
});
