import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import WatersportRentalsAndLessons from './components/pages/WatersportRentalsAndLessons';
import AdventurePackages from './components/pages/AdventurePackages';
import SummerCamp from './components/pages/SummerCamp';
import BoatToursAndWaterTaxi from './components/pages/BoatToursAndWaterTaxi';
import Booking from './components/pages/Booking';
import SignUp from './components/pages/SignUp';
import Cart from './components/pages/Cart'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/watersport-rentals-lessons' component={WatersportRentalsAndLessons} />
          <Route path='/adventure-packages' component={AdventurePackages} />
          <Route path='/summer-camp' component={SummerCamp} />
          <Route path='/boattours-watertaxi' component={BoatToursAndWaterTaxi} />
          <Route path='/booking' component={Booking} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/cart' component={Cart} />
  );


        </Switch>
      </Router>
    </>
  );
}

export default App;
