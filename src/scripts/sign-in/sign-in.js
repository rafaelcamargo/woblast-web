import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WCard } from '@scripts/base/components/card/card';
import { WCol } from '@scripts/base/components/col/col';
import { WContainer } from '@scripts/base/components/container/container';
import { WCover } from '@scripts/base/components/cover/cover';
import { WLogo } from '@scripts/base/components/logo/logo';
import { WRow } from '@scripts/base/components/row/row';
import { WAuthForm } from '@scripts/auth/components/auth-form/auth-form';

export class SignIn extends Component {
  render() {
    return (
      <WCover>
        <WContainer>
          <WRow>
            <WCol size="4" offset="4">
              <WRow align="center">
                <WCol size="12">
                  <WLogo />
                </WCol>
              </WRow>
              <WRow>
                <WCol size="12">
                  <WCard>
                    <WAuthForm />
                  </WCard>
                </WCol>
              </WRow>
              <WRow align="center">
                <WCol size="12">
                  <p>Don't have an account? <Link to='/sign-up'>Sign up</Link>.</p>
                </WCol>
              </WRow>
            </WCol>
          </WRow>
        </WContainer>
      </WCover>
    );
  }
}
