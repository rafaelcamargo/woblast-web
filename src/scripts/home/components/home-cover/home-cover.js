import '@styles/home-cover.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WButton } from '@scripts/base/components/button/button';
import { WCol } from '@scripts/base/components/col/col';
import { WContainer } from '@scripts/base/components/container/container';
import { WCover } from '@scripts/base/components/cover/cover';
import { WLogo } from '@scripts/base/components/logo/logo';
import { WRow } from '@scripts/base/components/row/row';

export class WHomeCover extends Component {
  render() {
    return (
      <div className="w-home-cover">
        <WCover>
          <WContainer>
            <WRow align="center">
              <WCol size="12">
                <WLogo />
              </WCol>
            </WRow>
            <WRow align="center">
              <WCol size="12">
                <p>
                  This is an experimental project to get started with HG
                  Brasil Finance API and ChartJS.
                </p>
              </WCol>
            </WRow>
            <WRow align="center" offset="4">
              <WCol size="12">
                <Link to="/sign-in">
                  <WButton theme="primary">
                    Sign In
                  </WButton>
                </Link>
              </WCol>
            </WRow>
            <WRow align="center">
              <WCol size="12">
                <p className="w-home-cover-signup-row">
                  Don't have an account? <Link to="/sign-up" data-sign-up-link>Sign Up</Link>.
                </p>
              </WCol>
            </WRow>
          </WContainer>
        </WCover>
      </div>
    );
  }
}
