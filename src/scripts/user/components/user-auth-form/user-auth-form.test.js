import React from 'react';
import { shallow } from 'enzyme';
import useruserAuthService from '@scripts/user/services/user-auth/user-auth';
import domService from '@scripts/base/services/dom/dom';
import routeService from '@scripts/base/services/route/route';
import userResource from '@scripts/user/resources/user/user';
import { WForm } from '@scripts/base/components/form/form';
import { WUserAuthForm } from './user-auth-form';

describe('User Form', () => {
  function mount(props = {}){
    return shallow(
      <WUserAuthForm />
    );
  }

  function fillInput(wrapper, name, value){
    const input = wrapper.find(`input[name="${name}"]`);
    input.value = value;
    input.simulate('change', { target: { name, value } });
  }

  beforeEach(() => {
    routeService.getSearchParams = jest.fn();
    routeService.go = jest.fn();
    domService.focusElement = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-user-auth-form');
  });

  it('should contain a form', () => {
    const wrapper = mount();
    expect(wrapper.find(WForm).length).toEqual(1);
  });

  it('should fill email on initialization if initial email has been defined on url', () => {
    const email = 'leo@email.com';
    routeService.getSearchParams = jest.fn(() => email);
    const wrapper = mount();
    expect(wrapper.find('input').at(0).prop('defaultValue')).toEqual(email);
  });

  it('should focus password input on initialization if initial email has been found on url', () => {
    routeService.getSearchParams = jest.fn(() => 'leo@email.com');
    const wrapper = mount();
    const instance = wrapper.instance();
    expect(domService.focusElement).toHaveBeenCalledWith(instance.passwordInputRef);
  });

  it('should authenticate a user', () => {
    useruserAuthService.auth = jest.fn((email, password, onSuccess) => onSuccess());
    const email = 'leo@email.com';
    const password = '123';
    const wrapper = mount();
    fillInput(wrapper, 'email', email);
    fillInput(wrapper, 'password', password);
    wrapper.instance().signIn();
    expect(useruserAuthService.auth.mock.calls[0][0]).toEqual(email);
    expect(useruserAuthService.auth.mock.calls[0][1]).toEqual(password);
    expect(routeService.go).toHaveBeenCalledWith('/dashboard');
  });

  it('should fail to authenticate if email has not been found', () => {
    const errorMessage = 'some error message';
    useruserAuthService.auth = jest.fn((email, password, onSuccess, onError) => onError(errorMessage));
    const wrapper = mount();
    wrapper.instance().signIn();
    expect(wrapper.find(WForm).prop('errorMessage')).toEqual(errorMessage);
  });
});
