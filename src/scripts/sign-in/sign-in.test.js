import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { WCard } from '@scripts/base/components/card/card';
import { WCover } from '@scripts/base/components/cover/cover';
import { WLogo } from '@scripts/base/components/logo/logo';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { WAuthForm } from '@scripts/auth/components/auth-form/auth-form';
import { SignIn } from '@scripts/sign-in/sign-in';

describe('Sign In', () => {
  function mount(){
    return shallow(
      <SignIn />
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(WViewport).length).toEqual(1);
  });

  it('should contain a cover', () => {
    const wrapper = mount();
    expect(wrapper.find(WCover).length).toEqual(1);
  });

  it('should contain a logo', () => {
    const wrapper = mount();
    expect(wrapper.find(WLogo).length).toEqual(1);
  });

  it('should contain a card', () => {
    const wrapper = mount();
    expect(wrapper.find(WCard).length).toEqual(1);
  });

  it('should contain an auth form', () => {
    const wrapper = mount();
    expect(wrapper.find(WAuthForm).length).toEqual(1);
  });

  it('should contain a link to sign up', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).prop('to')).toEqual('/sign-up');
  });
});
