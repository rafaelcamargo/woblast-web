import '@styles/card.styl';
import React, { Component } from 'react';
import { WLoader } from '@scripts/base/components/loader/loader';

export class WCard extends Component {
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
    this.setState({ shouldShowLoader: shouldShow });
  }
  render() {
    return (
      <div className="w-card">
        { buildLoader(this.state.shouldShowLoader) }
        { buildTitle(this.props.title) }
        <div className="w-card-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function buildLoader(shouldShow){
  return shouldShow ? <div className="w-card-loader"><WLoader /></div> : null;
}

function buildTitle(title){
  return title ? <div className="w-card-title" data-card-title>{ title }</div> : null;
}
