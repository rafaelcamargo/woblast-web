import '@styles/topbar.styl';
import React, { Component } from 'react';
import userAuthService from '@scripts/user/services/user-auth/user-auth';
import { Link } from 'react-router-dom';
import { Button } from '@scripts/base/components/button/button';
import { Col } from '@scripts/base/components/col/col';
import { Container } from '@scripts/base/components/container/container';
import { Logo } from '@scripts/base/components/logo/logo';
import { Row } from '@scripts/base/components/row/row';

export class Topbar extends Component {

  logout = () => {
    userAuthService.logout();
  };

  render() {
    return (
      <div className="w-topbar">
        <Container>
          <Row>
            <Col size="12">
              <Link to="/dashboard">
                <Logo />
              </Link>
              <Button onClick={ this.logout }>
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
