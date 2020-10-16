import React, { Component } from 'react';
import routeService from '@scripts/base/services/route/route';
import userResource from '@scripts/user/resources/user/user';
import { Button } from '@scripts/base/components/button/button';
import { Col } from '@scripts/base/components/col/col';
import { Field } from '@scripts/base/components/field/field';
import { Form } from '@scripts/base/components/form/form';
import { Row } from '@scripts/base/components/row/row';

export class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  save = () => {
    const { name, email, password } = this.state;
    this.setErrorMessage(null);
    userResource.save({ name, email, password }, () => {
      routeService.go(`/sign-in?email=${email}`);
    }, err => {
      this.setErrorMessage(err);
    });
  };

  onUserDataChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  setErrorMessage = errorMessage => {
    this.setState({ errorMessage });
  };

  render() {
    return (
      <div className="w-user-form">
        <Form onSubmit={ this.save } errorMessage={ this.state.errorMessage }>
          <Row>
            <Col size="12">
              <Field label="Name">
                <input
                  type="text"
                  name="name"
                  defaultValue={ this.state.name }
                  onChange={ this.onUserDataChange }
                  required />
              </Field>
            </Col>
          </Row>
          <Row>
            <Col size="12">
              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  defaultValue={ this.state.email }
                  onChange={ this.onUserDataChange }
                  required />
              </Field>
            </Col>
          </Row>
          <Row>
            <Col size="12">
              <Field label="Password">
                <input
                  type="password"
                  name="password"
                  defaultValue={ this.state.password }
                  onChange={ this.onUserDataChange }
                  required />
              </Field>
            </Col>
          </Row>
          <Row align="center">
            <Col size="12">
              <Button type="submit" theme="primary">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
