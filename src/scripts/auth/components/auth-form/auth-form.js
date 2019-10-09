import React, { Component } from 'react';
import userResource from '@scripts/user/resources/user/user';
import { WButton } from '@scripts/base/components/button/button';
import { WCol } from '@scripts/base/components/col/col';
import { WField } from '@scripts/base/components/field/field';
import { WForm } from '@scripts/base/components/form/form';
import { WRow } from '@scripts/base/components/row/row';

export class WAuthForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  signIn = () => {
    const { email, password } = this.state;
    const user = userResource.findByEmail(email);
    if(isValidateCredential(user, password))
      console.log('Great!');
    else
      this.setErrorMessage('Invalid credentials. Please, try again.');
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
        <WForm onSubmit={ this.save } errorMessage={ this.state.errorMessage }>
          <WRow>
            <WCol size="12">
              <WField label="Email">
                <input
                  type="text"
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

function isValidateCredential(user, password){
  if(!user)
    return false;
  return user.password === password;
}