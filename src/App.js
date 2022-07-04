import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import PLP from './pages/PLP';
import PDP from './pages/PDP';
import CartPage from './pages/CartPage';


import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {PLP} />
          <Route path = '/product/:productID' component = {PDP} />
          <Route exact path = '/cart' component   = {CartPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(App);