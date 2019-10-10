import React, { Component } from 'react';
import { WLoader } from '@scripts/base/components/loader/loader';

export class WRequester extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.fetch();
  }
  fetch(){
    this.setLoaderVisibility(true);
    this.setContentVisibility(false);
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
    this.setContentVisibility(true);
  }
  setLoaderVisibility(shouldShow){
    this.setState({ shouldShowLoader: shouldShow });
  }
  setContentVisibility(shouldShow){
    this.setState({ shouldShowContent: shouldShow });
  }
  render() {
    return (
      <div className="w-requester">
        { buildLoader(this.state.shouldShowLoader) }
        <div className={ buildContentClassName(this.state.shouldShowContent) } data-requester-content>
          { this.props.children }
        </div>
      </div>
    );
  }
}

function buildContentClassName(shouldShowContent){
  const baseCssClass = 'w-requester-content';
  return shouldShowContent ? `${baseCssClass} ${baseCssClass}-visible` : baseCssClass;
}

function buildLoader(shouldShowLoader){
  return shouldShowLoader ? <div className="w-card-loader"><WLoader /></div> : null;
}
