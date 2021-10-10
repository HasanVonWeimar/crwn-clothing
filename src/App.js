import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component.jsx';

import HomePage from './pages/homepage/homepage.component.jsx';


function App() {
  return (
    <div >
      <Route exact path='/' component = {HomePage} /> {/* at root display homepage element */}
      <Route exact path='/shop' component = {ShopPage} /> 
    </div>
  );
}

export default App;
