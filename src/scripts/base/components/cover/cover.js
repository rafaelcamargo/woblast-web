import '@styles/cover.styl';
import React, { Component } from 'react';

export class Cover extends Component {
  render() {
    return (
      <div className="w-cover">
        { this.props.children }
      </div>
    );
  }
}
