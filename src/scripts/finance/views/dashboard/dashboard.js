import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Container } from '@scripts/base/components/container/container';
import { Loader } from '@scripts/base/components/loader/loader';
import { Row } from '@scripts/base/components/row/row';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { FinanceCardList } from '@scripts/finance/components/finance-card-list/finance-card-list';

export class Dashboard extends Component {
  render() {
    return (
      <Viewport>
        <Container>
          <Row>
            <Col size="12">
              <FinanceCardList />
            </Col>
          </Row>
        </Container>
      </Viewport>
    );
  }
}
