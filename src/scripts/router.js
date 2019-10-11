import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@scripts/home/home';
import WHistory from '@scripts/base/components/history/history';
import { Dashboard } from '@scripts/dashboard/dashboard';
import { Monitor } from '@scripts/monitor/monitor';
import { SignUp } from '@scripts/sign-up/sign-up';
import { SignIn } from '@scripts/sign-in/sign-in';

export class AppRouter extends Component {
  render(){
    return (
      <Router>
        <WHistory>
          <ScrollToTop>
            <Route path="/" exact component={ Home } />
            <Route path="/sign-up" component={ SignUp } />
            <Route path="/sign-in" component={ SignIn } />
            <Route path="/dashboard" component={ Dashboard } />
            <Route path="/monitor" component={ Monitor } />
          </ScrollToTop>
        </WHistory>
      </Router>
    );
  }
}
