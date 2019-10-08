import React from 'react';
import { shallow } from 'enzyme';
import { WField } from '@scripts/base/components/field/field';

describe('Field', () => {
  function mount(props = {}){
    return shallow(
      <WField label={ props.label }>
        { props.content }
      </WField>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-field');
  });

  it('should render a label', () => {
    const label = 'Name';
    const wrapper = mount({ label });
    expect(wrapper.find('label').text()).toEqual(label);
  });

  it('should add required css class if content is required', () => {
    const content = <input type="text" required />
    const wrapper = mount({ content });
    expect(wrapper.find('label').prop('className')).toEqual('w-field-required');
  });
});
