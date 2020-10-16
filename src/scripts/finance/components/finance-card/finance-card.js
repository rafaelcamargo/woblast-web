import '@styles/finance-card.styl';
import React, { Component } from 'react';
import { Card } from '@scripts/base/components/card/card';

export class FinanceCard extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    if(onClick)
      onClick();
  };

  render() {
    return (
      <div className="w-finance-card" onClick={ this.handleClick }>
        <Card title={ this.props.title }>
          <div
            className={ buildValueClassName(this.props.indexationValue, this.props.value) }
            data-finance-card-value>
            <span>
              { buildValueSymbol(this.props.valueSymbol) }
              { this.props.value }
            </span>
          </div>
          { buildVariation(this.props.variation) }
        </Card>
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

function buildValueSymbol(symbol){
  return symbol ?
    <span className="w-finance-card-value-symbol" data-finance-card-value-symbol>
      { symbol }
    </span> :
    null;
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
