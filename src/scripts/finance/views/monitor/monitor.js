import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Container } from '@scripts/base/components/container/container';
import { Loader } from '@scripts/base/components/loader/loader';
import { Row } from '@scripts/base/components/row/row';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { FinanceMonitorCard } from '@scripts/finance/components/finance-monitor-card/finance-monitor-card';

export class Monitor extends Component {
  render() {
    return (
      <Viewport>
        <Container>
          <Row>
            <Col size="12">
              <FinanceMonitorCard />
            </Col>
          </Row>
        </Container>
      </Viewport>
    );
  }
}
