import '@styles/card.styl';
import React, { Component } from 'react';
import { Loader } from '@scripts/base/components/loader/loader';

export class Card extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    if(this.props.onFetch)
      this.fetch();
  }
  fetch(){
    this.setLoaderVisibility(true);
    this.props.onFetch().then(response => {
      this.props.onFetchSuccess(response);
      this.onFetchComplete();
    }, err => {
      this.props.onFetchError(err);
      this.onFetchComplete();
    });
  }
  onFetchComplete(){
    this.setLoaderVisibility(false);
  }
  setLoaderVisibility(shouldShow){
    this.setState({ shouldShoLoader: shouldShow });
  }
  render() {
    return (
      <div className="w-card">
        { buildLoader(this.state.shouldShoLoader) }
        { buildTitle(this.props.title) }
        <div className="w-card-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function buildLoader(shouldShow){
  return shouldShow ? <div className="w-card-loader"><Loader /></div> : null;
}

function buildTitle(title){
  return title ? <div className="w-card-title" data-card-title>{ title }</div> : null;
}
