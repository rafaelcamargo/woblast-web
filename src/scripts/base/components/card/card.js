import '@styles/card.styl';
import React, { Component } from 'react';

export class WCard extends Component {
  render() {
    return (
      <div className="w-card">
        { this.props.children }
      </div>
    );
  }
}
