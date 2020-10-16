import React, { Component } from 'react';
import useruserAuthService from '@scripts/user/services/user-auth/user-auth';
import domService from '@scripts/base/services/dom/dom';
import routeService from '@scripts/base/services/route/route';
import userResource from '@scripts/user/resources/user/user';
import { Button } from '@scripts/base/components/button/button';
import { Col } from '@scripts/base/components/col/col';
import { Field } from '@scripts/base/components/field/field';
import { Form } from '@scripts/base/components/form/form';
import { Row } from '@scripts/base/components/row/row';

export class UserAuthForm extends Component {
  constructor(props){
    super(props);
    this.initialEmail = getInitialEmail();
    this.passwordInputRef = React.createRef();
    this.state = { email: this.initialEmail, password: '' };
  }

  componentDidMount(){
    if(this.initialEmail)
      domService.focusElement(this.passwordInputRef);
  }

  signIn = () => {
    const { email, password } = this.state;
    useruserAuthService.auth(email, password, () => {
      routeService.go('/dashboard');
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
      <div className="w-user-auth-form">
        <Form onSubmit={ this.signIn } errorMessage={ this.state.errorMessage }>
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
                  ref={ this.passwordInputRef }
                  required />
              </Field>
            </Col>
          </Row>
          <Row align="center">
            <Col size="12">
              <Button type="submit" theme="primary">
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

function getInitialEmail(){
  return routeService.getSearchParams('email') || '';
}
