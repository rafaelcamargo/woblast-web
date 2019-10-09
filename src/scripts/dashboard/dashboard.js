import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WCard } from '@scripts/base/components/card/card';
import { WCol } from '@scripts/base/components/col/col';
import { WContainer } from '@scripts/base/components/container/container';
import { WLogo } from '@scripts/base/components/logo/logo';
import { WRow } from '@scripts/base/components/row/row';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { WAuthForm } from '@scripts/auth/components/auth-form/auth-form';

export class Dashboard extends Component {
  render() {
    return (
      <WViewport>
        <div>Hello!</div>
      </WViewport>
    );
  }
}
