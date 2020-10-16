import '@styles/finance-card-list.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import financeResource from '@scripts/finance/resources/finance/finance';
import routeService from '@scripts/base/services/route/route';
import { WRequester } from '@scripts/base/components/requester/requester';
import { FinanceCard } from '@scripts/finance/components/finance-card/finance-card';

export class FinanceCardList extends Component {
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
    return <FinanceCard
      title={ item.name }
      value={ item.value }
      valueSymbol={ item.valueSymbol }
      variation={ item.variation }
      indexationValue={ item.indexationValue }
      onClick={ goToMonitor.bind(item) }
      key={ index } />;
  });
}

function goToMonitor(item){
  const pathname = `/monitor?type=${this.type}&key=${this.key}`;
  routeService.go(pathname);
}
