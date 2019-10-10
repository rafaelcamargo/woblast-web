import '@styles/viewport.styl';
import React, { Component } from 'react';
import authService from '@scripts/auth/services/auth/auth';
import routeService from '@scripts/base/services/route/route';
import { WTopbar } from '@scripts/base/components/topbar/topbar';

export class WViewport extends Component {
  constructor(props){
    super(props);
    if(shouldRedirectToSignIn())
      routeService.go('/sign-in');
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

function shouldRedirectToSignIn(){
  return !isAuthenticated() && !pathnameIsOneOf(['/', '/sign-up', '/sign-in']);
}

function shouldRedirectToDashboard(){
  return isAuthenticated() && pathnameIsOneOf(['/sign-up', '/sign-in']);
}

function isAuthenticated(){
  return authService.isAuthenticated();
}

function pathnameIsOneOf(paths){
  return paths.includes(routeService.getPathname());
}

function buildTopbar(hideTopbar){
  return !hideTopbar ? <WTopbar /> : null;
}
