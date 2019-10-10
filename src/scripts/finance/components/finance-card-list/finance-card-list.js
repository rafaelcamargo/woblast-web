import '@styles/finance-card-list.styl';
import React, { Component } from 'react';
import financeResource from '@scripts/finance/resources/finance/finance';
import { WRequester } from '@scripts/base/components/requester/requester';
import { WFinanceCard } from '@scripts/finance/components/finance-card/finance-card';

export class WFinanceCardList extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  onFetch = () => {
    return financeResource.get();
  };

  onFetchSuccess = cardsData => {
    this.setState({ cardsData });
  }

  render() {
    return (
      <div className="w-finance-card-list">
        <WRequester onFetch={ this.onFetch } onFetchSuccess={ this.onFetchSuccess }>
          { buildFinanceCards(this.state.cardsData) }
        </WRequester>
      </div>
    );
  }
}

function buildFinanceCards(items){
  return items && items.map((item, index) => {
    return <WFinanceCard
      title={ item.name }
      value={ item.value }
      variation={ item.variation }
      indexationValue={ item.indexationValue }
      key={ index } />;
  });
}
