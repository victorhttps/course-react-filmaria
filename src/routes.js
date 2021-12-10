import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import React from 'react';
import Header from './components/Header';
import Filme from './pages/Filme';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
