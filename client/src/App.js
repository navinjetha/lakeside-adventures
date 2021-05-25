import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import About from './components/pages/About';
import WatersportRentalsAndLessons from './components/pages/WatersportRentalsAndLessons';
import AdventurePackages from './components/pages/AdventurePackages';
import SummerCamp from './components/pages/SummerCamp';
import BoatToursAndWaterTaxi from './components/pages/BoatToursAndWaterTaxi';
import Booking from './components/pages/Booking';

// import SignUp from './components/pages/SignUp';
import Cart from './components/pages/Cart';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AuthService from "./services/auth.service";



function App() {


  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const signIn = (details, history) => {
    console.log(details);

    AuthService.login(details.email, details.password).then(
      () => {
        // history.push("/welcome");
        history.push("/cart");
        window.location.reload();
      },
      error => { 
        setError(error.response.data.message);
      }
    );
  }

  const signUp = (details, history) => {

    AuthService.register(
      details.name,
      details.email,
      details.password
    ).then(
      response => {
        // history.push("/welcome")
        history.push("/login")
      },
      error => {
          setError(error.response.data.message)    
      }
    );
  }

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
          {/* <Route path='/sign-up' component={SignUp} /> */}
          <Route path='/cart' component={Cart} />
          <Route exact path = "/login"><LoginForm  signIn={signIn} error={error}/></Route>
            <Route path = "/register"><RegistrationForm signUp={signUp} error={error}/></Route>  
        </Switch>
      </Router>
    </>
  );
}

export default withRouter(App);
