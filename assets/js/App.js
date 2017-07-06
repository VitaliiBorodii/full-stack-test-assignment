import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux';

import Store from './Store';

import Home from './containers/Home'
import Category from './containers/Category'
import Item from './containers/Item'
import Search from './containers/Search'
import NotFound from './containers/NotFound'

import Header from './components/Header'

const App = () => (
  <Provider store={Store}>
    <HashRouter>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/category/:categoryId' component={Category}/>
          <Route path='/item/:itemId' component={Item}/>
          <Route path='/search' component={Search}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </HashRouter>
  </Provider>
)

export default App