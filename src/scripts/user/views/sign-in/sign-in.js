import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@scripts/base/components/card/card';
import { Col } from '@scripts/base/components/col/col';
import { Container } from '@scripts/base/components/container/container';
import { Cover } from '@scripts/base/components/cover/cover';
import { Logo } from '@scripts/base/components/logo/logo';
import { Row } from '@scripts/base/components/row/row';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { UserAuthForm } from '@scripts/user/components/user-auth-form/user-auth-form';

export class SignIn extends Component {
  render() {
    return (
      <Viewport hideTopbar>
        <Cover>
          <Container>
            <Row>
              <Col size="4" offset="4">
                <Row align="center">
                  <Col size="12">
                    <Logo />
                  </Col>
                </Row>
                <Row>
                  <Col size="12">
                    <Card>
                      <UserAuthForm />
                    </Card>
                  </Col>
                </Row>
                <Row align="center">
                  <Col size="12">
                    <p>Don't have an account? <Link to='/sign-up'>Sign up</Link>.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Cover>
      </Viewport>
    );
  }
}
