import '@styles/form.styl';
import React, { Component } from 'react';
import { Alert } from '@scripts/base/components/alert/alert';

export class Form extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form className="w-form" onSubmit={ this.handleSubmit }>
        { buildErrorElement(this.props.errorMessage) }
        { this.props.children }
      </form>
    );
  }
}

function buildErrorElement(message){
  return message ? <Alert theme="danger">{ message }</Alert> : null;
}
