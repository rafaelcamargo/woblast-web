import '@styles/finance-card.styl';
import React, { Component } from 'react';
import { WCard } from '@scripts/base/components/card/card';

export class WFinanceCard extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    if(onClick)
      onClick();
  };

  render() {
    return (
      <div className="w-finance-card" onClick={ this.handleClick }>
        <WCard title={ this.props.title }>
          <div
            className={ buildValueClassName(this.props.indexationValue, this.props.value) }
            data-finance-card-value>
            { this.props.value }
          </div>
          { buildVariation(this.props.variation) }
        </WCard>
      </div>
    );
  }
}

function buildValueClassName(indexationValue, value){
  const baseCssClass = `${getCssClassPrefix()}-value`;
  return indexationValue ?
    `${baseCssClass} ${buildIndexationCssClasses(value)}` :
    baseCssClass;
}

function buildIndexationCssClasses(value){
  const baseCssClass = `${getCssClassPrefix()}-indexation`;
  return isNegative(value) ? `${baseCssClass} ${baseCssClass}-negative` : baseCssClass;
}

function buildVariation(variation){
  return variation ?
    <div className={ buildVariationClassName(variation) } data-finance-card-variation>{ variation }</div> :
    null;
}

function buildVariationClassName(variation){
  return `${getCssClassPrefix()}-variation ${buildIndexationCssClasses(variation)}`;
}

function isNegative(value){
  return parseFloat(value) < 0;
}

function getCssClassPrefix(){
  return 'w-finance-card';
}
