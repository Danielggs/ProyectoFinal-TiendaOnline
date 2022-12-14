import "./App.css";
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import React from "react";
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import FormProduct from "./Components/FormProduct.js";
import CartList from './Components/CartList'
import UserDetail from "./Components/UserDetail";

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <div className="App">
      <Switch>
    <Route exact path='/' ><Home/></Route>
    <Route path='/admin' component={ FormProduct } />
    <Route path='/cart' component={ CartList } />
    <Route path='/user' component={UserDetail}/>
    </Switch>
 
    </div>
    </BrowserRouter>
  );
}
export default App; 