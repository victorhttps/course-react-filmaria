import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import React from 'react';
import Header from './components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {' '}
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
