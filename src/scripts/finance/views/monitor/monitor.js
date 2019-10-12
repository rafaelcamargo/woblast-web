import React, { Component } from 'react';
import { WCol } from '@scripts/base/components/col/col';
import { WContainer } from '@scripts/base/components/container/container';
import { WLoader } from '@scripts/base/components/loader/loader';
import { WRow } from '@scripts/base/components/row/row';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { WFinanceMonitorCard } from '@scripts/finance/components/finance-monitor-card/finance-monitor-card';

export class Monitor extends Component {
  render() {
    return (
      <WViewport>
        <WContainer>
          <WRow>
            <WCol size="12">
              <WFinanceMonitorCard />
            </WCol>
          </WRow>
        </WContainer>
      </WViewport>
    );
  }
}
