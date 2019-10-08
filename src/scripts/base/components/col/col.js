import '@styles/col.styl';
import React, { Component } from 'react';
import propBasedCssClassService from '@scripts/base/services/prop-based-css/prop-based-css';
import rangeService from '@scripts/base/services/range/range';

export class WCol extends Component {
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

function buildClassName({ size, offset }){
  const baseCssClass = getBaseCssClass();
  const sizeClass = propBasedCssClassService.build(baseCssClass, getValidSizes(), size);
  const offsetClass = propBasedCssClassService.build(`${baseCssClass}-offset`, getValidOffsets(), offset);
  return `${ baseCssClass } ${ sizeClass } ${ offsetClass }`.trim();
}

function getValidSizes(){
  return rangeService.buildStringifiedNumberRange(1, 12);
}

function getValidOffsets(){
  return rangeService.buildStringifiedNumberRange(1, 11);
}

function getBaseCssClass(){
  return 'w-col';
}
