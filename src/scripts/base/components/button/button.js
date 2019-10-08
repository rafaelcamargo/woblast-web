import '@styles/button.styl';
import React, { Component } from 'react';
import propBasedCssClassService from '@scripts/base/services/prop-based-css/prop-based-css';

export class WButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: buildClassName(this.props)
    };
  }
  render() {
    return (
      <button className={ this.state.className }>
        { this.props.children }
      </button>
    );
  }
}

function buildClassName({ theme, display }){
  const baseCssClass = getBaseCssClass();
  const themeCssClass = propBasedCssClassService.build(baseCssClass, getValidThemes(), theme);
  const displayCssClass = propBasedCssClassService.build(baseCssClass, getValidDisplays(), display);
  return `${ baseCssClass } ${ themeCssClass } ${ displayCssClass }`.trim();
}

function getValidThemes(){
  return ['primary'];
}

function getValidDisplays(){
  return ['block'];
}

function getBaseCssClass(){
  return 'w-button';
}
