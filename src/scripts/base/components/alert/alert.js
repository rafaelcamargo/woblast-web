import '@styles/alert.styl';
import React, { Component } from 'react';
import propBasedCssClassService from '@scripts/base/services/prop-based-css/prop-based-css';

export class Alert extends Component {
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

function buildClassName({ theme }){
  const baseCssClass = getBaseCssClass();
  const themeClass = propBasedCssClassService.build(baseCssClass, getValidThemes(), theme);
  return `${ baseCssClass } ${ themeClass }`.trim();
}

function getValidThemes(){
  return ['warning', 'danger'];
}

function getBaseCssClass(){
  return 'w-alert';
}
