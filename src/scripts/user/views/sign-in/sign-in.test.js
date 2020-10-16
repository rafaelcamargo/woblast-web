import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Card } from '@scripts/base/components/card/card';
import { Cover } from '@scripts/base/components/cover/cover';
import { Logo } from '@scripts/base/components/logo/logo';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { UserAuthForm } from '@scripts/user/components/user-auth-form/user-auth-form';
import { SignIn } from './sign-in';

describe('Sign In', () => {
  function mount(){
    return shallow(
      <SignIn />
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a cover', () => {
    const wrapper = mount();
    expect(wrapper.find(Cover).length).toEqual(1);
  });

  it('should contain a logo', () => {
    const wrapper = mount();
    expect(wrapper.find(Logo).length).toEqual(1);
  });

  it('should contain a card', () => {
    const wrapper = mount();
    expect(wrapper.find(Card).length).toEqual(1);
  });

  it('should contain an auth form', () => {
    const wrapper = mount();
    expect(wrapper.find(UserAuthForm).length).toEqual(1);
  });

  it('should contain a link to sign up', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).prop('to')).toEqual('/sign-up');
  });
});
