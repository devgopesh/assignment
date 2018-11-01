import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Profile from './containers/Profile';
import Posts from './containers/Posts';
import Messages from './containers/Messages';
import Header from './components/Header';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route exact path="/assignment" component={Profile} />
        <Route  exact path="/assignment/posts" component={Posts} />
        <Route exact path="/assignment/messages" component={Messages} />
      </Switch>
    );

    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
