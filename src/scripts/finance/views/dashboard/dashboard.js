import React, { Component } from 'react';
import { WCol } from '@scripts/base/components/col/col';
import { WContainer } from '@scripts/base/components/container/container';
import { WLoader } from '@scripts/base/components/loader/loader';
import { WRow } from '@scripts/base/components/row/row';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { WFinanceCardList } from '@scripts/finance/components/finance-card-list/finance-card-list';

export class Dashboard extends Component {
  render() {
    return (
      <WViewport>
        <WContainer>
          <WRow>
            <WCol size="12">
              <WFinanceCardList />
            </WCol>
          </WRow>
        </WContainer>
      </WViewport>
    );
  }
}
