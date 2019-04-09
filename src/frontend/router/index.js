import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import Home from '@/pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" render={() => (<Redirect to="/" />)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
