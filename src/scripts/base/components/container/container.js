import '@styles/container.styl';
import React, { Component } from 'react';

export class WContainer extends Component {
  render() {
    return (
      <div className="w-container">
        { this.props.children }
      </div>
    );
  }
}
