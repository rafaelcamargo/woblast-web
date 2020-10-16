import '@styles/home-cover.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@scripts/base/components/button/button';
import { Col } from '@scripts/base/components/col/col';
import { Container } from '@scripts/base/components/container/container';
import { Cover } from '@scripts/base/components/cover/cover';
import { Logo } from '@scripts/base/components/logo/logo';
import { Row } from '@scripts/base/components/row/row';

export class HomeCover extends Component {
  render() {
    return (
      <div className="w-home-cover">
        <Cover>
          <Container>
            <Row align="center">
              <Col size="12">
                <Logo />
              </Col>
            </Row>
            <Row align="center">
              <Col size="12">
                <p>
                  This is an experimental project to get started with HG
                  Brasil Finance API and ChartJS.
                </p>
              </Col>
            </Row>
            <Row align="center" offset="4">
              <Col size="12">
                <Link to="/sign-in">
                  <Button theme="primary">
                    Sign In
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row align="center">
              <Col size="12">
                <p className="w-home-cover-signup-row">
                  Don't have an account? <Link to="/sign-up">Sign Up</Link>.
                </p>
              </Col>
            </Row>
          </Container>
        </Cover>
      </div>
    );
  }
}
