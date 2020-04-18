import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';

// pages
import Home from './pages/Home';
import Error from './pages/Error';
import Apart from './pages/Aparts';
import SingleApart from './pages/SingleApart';
import SingleCar from './pages/SingleCar';
import RentaCars from './pages/RentaCars';
import Excursions from './pages/Excursions';
import Legal from './pages/Legal';
import AboutMe from './pages/AboutMe';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// styles
import './App.scss';

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/apartments/' exact component={Apart} />
          <Route path='/rentacar/' exact component={RentaCars} />
          <Route path='/excursions/' exact component={Excursions} />
          <Route path='/legal/' exact component={Legal} />
          <Route path='/aboutme/' exact component={AboutMe} />
          <Route path='/apartments/:slug' exact component={SingleApart} />
          <Route path='/rentacar/:slug' exact component={SingleCar} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
