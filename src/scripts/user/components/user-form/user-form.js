import React, { Component } from 'react';
import { WButton } from '@scripts/base/components/button/button';
import { WCol } from '@scripts/base/components/col/col';
import { WField } from '@scripts/base/components/field/field';
import { WForm } from '@scripts/base/components/form/form';
import { WRow } from '@scripts/base/components/row/row';

export class WUserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  save = () => {
    console.log(this.state);
  };

  onUserDataChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="w-user-form">
        <WForm onSubmit={ this.save }>
          <WRow>
            <WCol size="12">
              <WField label="Name">
                <input
                  type="text"
                  name="name"
                  defaultValue={ this.state.name }
                  onChange={ this.onUserDataChange }
                  required />
              </WField>
            </WCol>
          </WRow>
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
                Sign Up
              </WButton>
            </WCol>
          </WRow>
        </WForm>
      </div>
    );
  }
}
