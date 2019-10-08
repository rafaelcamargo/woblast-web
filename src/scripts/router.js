import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@scripts/home/home';

export class AppRouter extends Component {
  render(){
    return (
      <Router>
        <ScrollToTop>
          <Route path="/" onChange={ this.onRouteChange } exact component={ Home } />
        </ScrollToTop>
      </Router>
    );
  }
}
