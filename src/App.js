import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header.component';
import PLP from './pages/product-listing-page';
import PDP from './pages/product-display-page';
import CartPage from './pages/cart-page';


import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={PLP} />
          <Route path='/shop' component={PDP} />
          <Route exact path='/cart' component={CartPage} />
        </Switch>
      </div>
    )
  }
}

export default App;