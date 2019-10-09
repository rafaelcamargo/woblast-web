import '@styles/viewport.styl';
import React, { Component } from 'react';
import { WTopbar } from '@scripts/base/components/topbar/topbar';

export class WViewport extends Component {
  render() {
    return (
      <div className="w-viewport">
        <WTopbar />
        <div className="w-viewport-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}
