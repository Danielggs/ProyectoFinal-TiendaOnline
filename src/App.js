import "./App.css";
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import React from "react";
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import FormProduct from "./Components/FormProduct.js";
import CartList from './Components/CartList'
import Detail from "./Components/Detail";


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <div className="App">
      <Switch>
    <Route exact path='/' ><Home/></Route>
    <Route  path='/create' component={ FormProduct } />
    <Route  path='/cart' component={ CartList } />
    <Route  path='/detail/:id' component={ Detail } />

    </Switch>
 
    </div>
    </BrowserRouter>
  );
}
export default App; 