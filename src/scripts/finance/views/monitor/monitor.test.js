import React from 'react';
import { shallow } from 'enzyme';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { FinanceMonitorCard } from '@scripts/finance/components/finance-monitor-card/finance-monitor-card';
import { Monitor } from './monitor';

describe('Monitor', () => {
  function mount(){
    return shallow(
      <Monitor />
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a finance monitor card', () => {
    const wrapper = mount();
    expect(wrapper.find(FinanceMonitorCard).length).toEqual(1);
  });
});
