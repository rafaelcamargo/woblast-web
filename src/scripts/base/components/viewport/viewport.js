import '@styles/viewport.styl';
import React, { Component } from 'react';
import authService from '@scripts/auth/services/auth/auth';
import routeService from '@scripts/base/services/route/route';
import { WTopbar } from '@scripts/base/components/topbar/topbar';

export class WViewport extends Component {
  constructor(props){
    super(props);
    if(shouldRedirectToDashboard())
      routeService.go('/dashboard');
  }
  render() {
    return (
      <div className="w-viewport">
        { buildTopbar(this.props.hideTopbar) }
        <div className="w-viewport-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function shouldRedirectToDashboard(){
  if(!authService.isAuthenticated())
    return false;
  const pathname = routeService.getPathname();
  return pathname == '/sign-up' || pathname == '/sign-in';
}

function buildTopbar(hideTopbar){
  return !hideTopbar ? <WTopbar /> : null;
}
