import '@styles/cover.styl';
import React, { Component } from 'react';

export class WCover extends Component {
  render() {
    return (
      <div className="w-cover">
        { this.props.children }
      </div>
    );
  }
}
