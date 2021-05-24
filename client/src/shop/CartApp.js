
import './CartApp.css';
import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Pages
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from './screens/CartScreen'

// Components
import CartNavbar from './components/CartNavbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'

function CartApp() {
  const [sideToggle, setSidetoggle] = useState(false)
  return (
    <Router>
    <CartNavbar click={() => setSidetoggle(true)}/>
    <SideDrawer show={sideToggle} click={() => setSidetoggle(false)}/>
    <Backdrop show={sideToggle} click={() => setSidetoggle(false)}/> */}
      <main className="app">
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} /> 
        </Switch>
      </main>
    </Router>
  );
}

export default CartApp;