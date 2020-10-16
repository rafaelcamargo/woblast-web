import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '@scripts/base/components/alert/alert';
import { Form } from '@scripts/base/components/form/form';

describe('Form', () => {
  function mount(props = {}){
    return shallow(
      <Form onSubmit={ props.onSubmit } errorMessage={ props.errorMessage }>
        { props.content }
      </Form>
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

  it('should show error message', () => {
    const errorMessage = 'err';
    const wrapper = mount({ errorMessage });
    expect(wrapper.find(Alert).prop('theme')).toEqual('danger');
    expect(wrapper.find(Alert).childAt(0).text()).toEqual('err');
  });
});
