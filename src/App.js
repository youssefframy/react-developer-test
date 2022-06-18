import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

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
          <Route exact path='/' component={PLP} />
          <Route path='/shop' component={PDP} />
          <Route exact path='/cart' component={CartPage} />
        </Switch>
      </div>
    )
  }
}

export default App;