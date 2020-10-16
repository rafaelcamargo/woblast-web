import '@styles/row.styl';
import React, { Component } from 'react';
import propBasedCssClassService from '@scripts/base/services/prop-based-css/prop-based-css';
import rangeService from '@scripts/base/services/range/range';

export class Row extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(props) };
  }
  render() {
    return (
      <div className={ this.state.className }>
        { this.props.children }
      </div>
    );
  }
}

function buildClassName({ align, offset }){
  const baseCssClass = getBaseCssClass()
  const alignClass = propBasedCssClassService.build(baseCssClass, buildValidAligns(), align);
  const offsetClass = propBasedCssClassService.build(`${baseCssClass}-offset`, buildValidOffsets(), offset);
  return `${ baseCssClass } ${alignClass} ${offsetClass}`.trim();
}

function buildValidAligns(){
  return ['center', 'right'];
}

function buildValidOffsets(){
  return rangeService.buildStringifiedNumberRange(1, 10);
}

function getBaseCssClass(){
  return 'w-row';
}
