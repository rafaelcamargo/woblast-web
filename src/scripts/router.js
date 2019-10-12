import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@scripts/home/home';
import WHistory from '@scripts/base/components/history/history';
import { Dashboard } from '@scripts/dashboard/dashboard';
import { Monitor } from '@scripts/monitor/monitor';
import { SignIn } from '@scripts/user/views/sign-in/sign-in';
import { SignUp } from '@scripts/user/views/sign-up/sign-up';

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
