import './App.css';
import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CartPage from './Components/CartPage';
import Details from './Components/Details';
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className='App'>
        <Routes>
        <Route path='/' Component={Home} exact>
        </Route>
        <Route path='/Cart' Component={CartPage} >
        </Route>
        <Route path='/details' Component={Details} >
        </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
