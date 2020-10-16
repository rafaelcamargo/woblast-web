import '@styles/button.styl';
import React, { Component } from 'react';
import propBasedCssClassService from '@scripts/base/services/prop-based-css/prop-based-css';

export class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: buildClassName(this.props)
    };
  }

  handleClick = () => {
    const { onClick } = this.props;
    if(onClick)
      onClick();
  };

  render() {
    return (
      <button
        type={ buildType(this.props.type) }
        className={ this.state.className }
        onClick={ this.handleClick }>
        { this.props.children }
      </button>
    );
  }
}

function buildType(type){
  return type ? type : 'button';
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
