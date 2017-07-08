import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux';

import Store from './Store';

import Home from './containers/Home'
import Category from './containers/Category'
import Item from './containers/Item'
import Search from './containers/Search'
import NotFound from './containers/NotFound'

//import PageTransition from 'react-router-page-transition';
import { RouteTransition } from 'react-router-transition';

import styles from './containers/Home/style.css'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <Provider store={Store}>
    <HashRouter>
      <div className="container">
        <Route render={({location, history, match}) => {
        return (
          <RouteTransition
            className="content"
            pathname={location.pathname}
            atEnter={{ opacity: .1 }}
            atLeave={{ opacity: .1 }}
            atActive={{ opacity: 1 }}
            spring={{val: 1000}}
            component={false}
          >
          <div className={'app'}>
            <Header/>
            <Switch key={location.key} location={location}>
              <Route exact path='/' component={Home}/>
              <Route exact path='/category/:categoryId' component={Category}/>
              <Route exact path='/item/:itemId' component={Item}/>
              <Route exact path='/search' component={Search}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer /> </div>
          </RouteTransition>
        );
      }} />
      </div>
    </HashRouter>
  </Provider>
)

export default App