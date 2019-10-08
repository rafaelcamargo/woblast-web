import '@styles/form.styl';
import React, { Component } from 'react';

export class WForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form className="w-form" onSubmit={ this.handleSubmit }>
        { this.props.children }
      </form>
    );
  }
}
