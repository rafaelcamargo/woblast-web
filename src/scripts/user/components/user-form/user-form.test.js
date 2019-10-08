import React from 'react';
import { shallow } from 'enzyme';
import { WForm } from '@scripts/base/components/form/form';
import { WUserForm } from '@scripts/user/components/user-form/user-form';

describe('User Form', () => {
  function mount(props = {}){
    return shallow(
      <WUserForm />
    );
  }

  function fillInput(wrapper, name, value){
    const input = wrapper.find(`input[name="${name}"]`);
    input.value = value;
    input.simulate('change', { target: { name, value } });
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-user-form');
  });

  it('should contain a form', () => {
    const wrapper = mount();
    expect(wrapper.find(WForm).length).toEqual(1);
  });

  it('should save a user', () => {
    console.log = jest.fn();
    const name = 'Rafael';
    const email = 'some@email.com';
    const password = '123';
    const wrapper = mount();
    fillInput(wrapper, 'name', name);
    fillInput(wrapper, 'email', email);
    fillInput(wrapper, 'password', password);
    wrapper.instance().save();
    expect(console.log).toHaveBeenCalledWith({ name, email, password });
  });
});
