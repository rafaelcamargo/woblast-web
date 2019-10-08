import '@styles/field.styl';
import React, { Component } from 'react';

export class WField extends Component {
  render() {
    return (
      <div className="w-field">
        <div className="w-field-label-wrapper">
          <label className={ buildLabelClassName(this.props.children) }>
            { this.props.label }
          </label>
        </div>
        <div className="w-field-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function buildLabelClassName(children){
  return children && children.props.required ? 'w-field-required' : '';
}
