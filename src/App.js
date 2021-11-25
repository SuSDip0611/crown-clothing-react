import React from 'react';
import { Switch, Route } from 'react-router';

import './App.css';
import ShopPage from './pages/shop/shop.components';
import HomePage from './pages/homepage/homepage.component';
import SignUpAndsignIn from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div >
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} /> 
        <Route path='/hats' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignUpAndsignIn} />
      </Switch>
    </div>
  );
}

export default App;
