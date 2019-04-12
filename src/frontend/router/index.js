import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import Game from '@/pages/Game'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Game} />
        <Route path="*" render={() => (<Redirect to="/" />)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
