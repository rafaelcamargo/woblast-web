import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@scripts/home/home';
import { SignUp } from '@scripts/sign-up/sign-up';

export class AppRouter extends Component {
  render(){
    return (
      <Router>
        <ScrollToTop>
          <Route path="/" exact component={ Home } />
          <Route path="/signup" exact component={ SignUp } />
        </ScrollToTop>
      </Router>
    );
  }
}
