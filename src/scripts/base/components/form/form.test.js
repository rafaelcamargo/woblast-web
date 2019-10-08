import React from 'react';
import { shallow } from 'enzyme';
import { WForm } from '@scripts/base/components/form/form';

describe('Form', () => {
  function mount(props = {}){
    return shallow(
      <WForm onSubmit={ props.onSubmit }>
        { props.content }
      </WForm>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-form');
  });

  it('should execute submit callback on submit', () => {
    const eventMock = { preventDefault: jest.fn() };
    const content = <button type="submit">Submit</button>;
    const onSubmit = jest.fn();
    const wrapper = mount({ onSubmit, content });
    wrapper.simulate('submit', eventMock);
    expect(eventMock.preventDefault).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });
});
