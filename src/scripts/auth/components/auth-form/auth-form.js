import React, { Component } from 'react';
import authService from '@scripts/auth/services/auth/auth';
import domService from '@scripts/base/services/dom/dom';
import routeService from '@scripts/base/services/route/route';
import userResource from '@scripts/user/resources/user/user';
import { WButton } from '@scripts/base/components/button/button';
import { WCol } from '@scripts/base/components/col/col';
import { WField } from '@scripts/base/components/field/field';
import { WForm } from '@scripts/base/components/form/form';
import { WRow } from '@scripts/base/components/row/row';

export class WAuthForm extends Component {
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
    authService.auth(email, password, () => {
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
      <div className="w-auth-form">
        <WForm onSubmit={ this.signIn } errorMessage={ this.state.errorMessage }>
          <WRow>
            <WCol size="12">
              <WField label="Email">
                <input
                  type="email"
                  name="email"
                  defaultValue={ this.state.email }
                  onChange={ this.onUserDataChange }
                  required />
              </WField>
            </WCol>
          </WRow>
          <WRow>
            <WCol size="12">
              <WField label="Password">
                <input
                  type="password"
                  name="password"
                  defaultValue={ this.state.password }
                  onChange={ this.onUserDataChange }
                  ref={ this.passwordInputRef }
                  required />
              </WField>
            </WCol>
          </WRow>
          <WRow align="center">
            <WCol size="12">
              <WButton type="submit" theme="primary">
                Sign In
              </WButton>
            </WCol>
          </WRow>
        </WForm>
      </div>
    );
  }
}

function getInitialEmail(){
  return routeService.getSearchParams('email') || '';
}
