import React from 'react';
import { shallow } from 'enzyme';
import { FinanceCardList } from '@scripts/finance/components/finance-card-list/finance-card-list';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  function mount(){
    return shallow(
      <Dashboard />
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a finance card list', () => {
    const wrapper = mount();
    expect(wrapper.find(FinanceCardList).length).toEqual(1);
  });
});
