import React from 'react';
import { shallow } from 'enzyme';
import routeService from '@scripts/base/services/route/route';
import userResource from '@scripts/user/resources/user/user';
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

  beforeEach(() => {
    routeService.go = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-user-form');
  });

  it('should contain a form', () => {
    const wrapper = mount();
    expect(wrapper.find(WForm).length).toEqual(1);
  });

  it('should save a user', () => {
    userResource.save = jest.fn();
    const name = 'Rafael';
    const email = 'some@email.com';
    const password = '123';
    const wrapper = mount();
    fillInput(wrapper, 'name', name);
    fillInput(wrapper, 'email', email);
    fillInput(wrapper, 'password', password);
    wrapper.instance().save();
    expect(userResource.save.mock.calls[0][0]).toEqual({ name, email, password });
  });

  it('should redirect user to sign in on save success', () => {
    userResource.save = jest.fn((user, onSuccess) => onSuccess());
    const name = 'Rafael';
    const email = 'some@email.com';
    const password = '123';
    const wrapper = mount();
    fillInput(wrapper, 'name', name);
    fillInput(wrapper, 'email', email);
    fillInput(wrapper, 'password', password);
    wrapper.instance().save();
    expect(routeService.go).toHaveBeenCalledWith('/sign-in?email=some@email.com');
  });

  it('should set error message on save error', () => {
    const errorMessage = 'err';
    userResource.save = jest.fn((user, onSuccess, onError) => onError(errorMessage));
    const wrapper = mount();
    wrapper.instance().save();
    expect(wrapper.find(WForm).prop('errorMessage')).toEqual(errorMessage);
  });

  it('should delete set error message on save', () => {
    userResource.save = jest.fn();
    const wrapper = mount();
    const instance = wrapper.instance()
    instance.setErrorMessage('err');
    instance.save();
    expect(wrapper.find(WForm).prop('errorMessage')).toEqual(null);
  });
});
