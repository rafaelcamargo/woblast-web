import '@styles/topbar.styl';
import React, { Component } from 'react';
import userAuthService from '@scripts/user/services/user-auth/user-auth';
import { Link } from 'react-router-dom';
import { WButton } from '@scripts/base/components/button/button';
import { WCol } from '@scripts/base/components/col/col';
import { WContainer } from '@scripts/base/components/container/container';
import { WLogo } from '@scripts/base/components/logo/logo';
import { WRow } from '@scripts/base/components/row/row';

export class WTopbar extends Component {

  logout = () => {
    userAuthService.logout();
  };

  render() {
    return (
      <div className="w-topbar">
        <WContainer>
          <WRow>
            <WCol size="12">
              <Link to="/dashboard">
                <WLogo />
              </Link>
              <WButton onClick={ this.logout }>
                Logout
              </WButton>
            </WCol>
          </WRow>
        </WContainer>
      </div>
    );
  }
}
