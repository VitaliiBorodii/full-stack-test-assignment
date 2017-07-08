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

const transitions = {
  root: {
    atEnter: { opacity: .1, scale: 1},
    atLeave: { opacity: .1, scale: 1},
    atActive: { opacity: 1, scale: 1}
  },
  nested: {
    atEnter: { opacity: .2, scale: .5},
    atLeave: { opacity: .1, scale: 1},
    atActive: { opacity: 1, scale: 1}
  },
}

const getTransition = (pathname) => {
  return (pathname === '/') ? transitions.root : transitions.nested
  if ((/\/item\//).test(pathname)) {
    return transitions.item
  } else if ((/\/category\//).test(pathname)) {
    return transitions.category
  } else {
    return transitions.def
  }
}

const App = () => (
  <Provider store={Store}>
    <HashRouter>
      <div className="container">
        <Header/>
        <Route render={({location, history, match}) => {
        const styles = getTransition(location.pathname)
        return (
          <RouteTransition
            className="content"
            pathname={location.pathname}
            {...styles}
            mapStyles={styles => ({opacity: styles.opacity, transform: `translate3d(0, 0, 0) scale(${styles.scale})` })}
            component={false}
          >
          <div className={'app'}>
            <Switch key={location.key} location={location}>
              <Route exact path='/' component={Home}/>
              <Route path='/category/:categoryId' component={Category}/>
              <Route path='/item/:itemId' component={Item}/>
              <Route path='/search' component={Search}/>
              <Route component={NotFound}/>
            </Switch>
           </div>
          </RouteTransition>
        );
      }} />
        <Footer />
      </div>
    </HashRouter>
  </Provider>
)

export default App