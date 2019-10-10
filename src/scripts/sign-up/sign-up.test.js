import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { WCard } from '@scripts/base/components/card/card';
import { WCover } from '@scripts/base/components/cover/cover';
import { WLogo } from '@scripts/base/components/logo/logo';
import { WUserForm } from '@scripts/user/components/user-form/user-form';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { SignUp } from '@scripts/sign-up/sign-up';

describe('Sign Up', () => {
  function mount(){
    return shallow(
      <SignUp />
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

  it('should contain a user form', () => {
    const wrapper = mount();
    expect(wrapper.find(WUserForm).length).toEqual(1);
  });

  it('should contain a link to sign in', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).prop('to')).toEqual('/sign-in');
  });
});
