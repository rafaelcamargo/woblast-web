import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WCard } from '@scripts/base/components/card/card';
import { WCol } from '@scripts/base/components/col/col';
import { WContainer } from '@scripts/base/components/container/container';
import { WCover } from '@scripts/base/components/cover/cover';
import { WLogo } from '@scripts/base/components/logo/logo';
import { WRow } from '@scripts/base/components/row/row';
import { WUserForm } from '@scripts/user/components/user-form/user-form';

export class SignUp extends Component {
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
                    <WUserForm />
                  </WCard>
                </WCol>
              </WRow>
              <WRow align="center">
                <WCol size="12">
                  <p>Already have an account? <Link to='/sign-in'>Sign in</Link>.</p>
                </WCol>
              </WRow>
            </WCol>
          </WRow>
        </WContainer>
      </WCover>
    );
  }
}
