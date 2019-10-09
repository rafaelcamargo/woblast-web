import React from 'react';
import { shallow } from 'enzyme';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { Dashboard } from '@scripts/dashboard/dashboard';

describe('Dashboard', () => {
  function mount(){
    return shallow(
      <Dashboard />
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(WViewport).length).toEqual(1);
  });
});
