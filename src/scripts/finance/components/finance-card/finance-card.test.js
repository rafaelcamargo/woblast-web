import React from 'react';
import { shallow } from 'enzyme';
import { WCard } from '@scripts/base/components/card/card';
import { WFinanceCard } from '@scripts/finance/components/finance-card/finance-card';

describe('Finance Card', () => {
  function mount(props = {}){
    return shallow(
      <WFinanceCard
        title={ props.title }
        value={ props.value }
        variation={ props.variation }
        indexationValue={ props.indexationValue } />
    );
  }

  function getValueElement(wrapper){
    return wrapper.find('[data-finance-card-value]');
  }

  function getVariationElement(wrapper){
    return wrapper.find('[data-finance-card-variation]');
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-finance-card');
  });

  it('should render a title', () => {
    const title = 'Titlte';
    const wrapper = mount({ title });
    expect(wrapper.find(WCard).prop('title')).toEqual(title);
  });

  it('should render a value', () => {
    const value = 4.478;
    const wrapper = mount({ value });
    expect(getValueElement(wrapper).text()).toEqual('4.478');
  });

  it('should not render variation by default', () => {
    const wrapper = mount();
    expect(wrapper.find('[data-finance-card-variation]').length).toEqual(0);
  });

  it('should optionally render variation', () => {
    const wrapper = mount({ variation: 1.345 });
    const variationElement = getVariationElement(wrapper);
    expect(variationElement.text()).toEqual('1.345');
    expect(variationElement.prop('className').includes('w-finance-card-indexation')).toEqual(true);
    expect(variationElement.prop('className').includes('w-finance-card-indexation-negative')).toEqual(false);
  });

  it('should varation be red when is negative', () => {
    const wrapper = mount({ variation: -1.345 });
    const variationElement = getVariationElement(wrapper);
    expect(variationElement.text()).toEqual('-1.345');
    expect(variationElement.prop('className').includes('w-finance-card-indexation')).toEqual(true);
    expect(variationElement.prop('className').includes('w-finance-card-indexation-negative')).toEqual(true);
  });

  it('should value be red when is indexation value and is negative', () => {
    const wrapper = mount({ value: -1.345, indexationValue: true });
    const valueElement = getValueElement(wrapper);
    expect(valueElement.text()).toEqual('-1.345');
    expect(valueElement.prop('className').includes('w-finance-card-indexation')).toEqual(true);
    expect(valueElement.prop('className').includes('w-finance-card-indexation-negative')).toEqual(true);
  });
});
