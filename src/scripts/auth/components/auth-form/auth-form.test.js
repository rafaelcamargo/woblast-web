import React from 'react';
import { shallow } from 'enzyme';
import userResource from '@scripts/user/resources/user/user';
import { WForm } from '@scripts/base/components/form/form';
import { WAuthForm } from '@scripts/auth/components/auth-form/auth-form';

describe('User Form', () => {
  function mount(props = {}){
    return shallow(
      <WAuthForm />
    );
  }

  function mockUsers(){
    return {
      'leo@email.com': { password: '123' },
      'rafael@email.com': { password: '456' }
    };
  }

  function fillInput(wrapper, name, value){
    const input = wrapper.find(`input[name="${name}"]`);
    input.value = value;
    input.simulate('change', { target: { name, value } });
  }

  beforeEach(() => {
    userResource.findByEmail = jest.fn(email => mockUsers()[email]);
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-auth-form');
  });

  it('should contain a form', () => {
    const wrapper = mount();
    expect(wrapper.find(WForm).length).toEqual(1);
  });

  it('should authenticate a user', () => {
    console.log = jest.fn();
    const email = 'leo@email.com';
    const password = '123';
    const wrapper = mount();
    fillInput(wrapper, 'email', email);
    fillInput(wrapper, 'password', password);
    wrapper.instance().signIn();
    expect(console.log).toHaveBeenCalledWith('Great!');
  });

  it('should fail to authenticate if email has not been found', () => {
    const errorMessage = 'Invalid credentials. Please, try again.';
    const email = 'camargo@email.com';
    const password = '123';
    const wrapper = mount();
    fillInput(wrapper, 'email', email);
    fillInput(wrapper, 'password', password);
    wrapper.instance().signIn();
    expect(wrapper.find(WForm).prop('errorMessage')).toEqual(errorMessage);
  });
});
