import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // You'll create this file soon
import Header from './components/Header';
import Reserve from './pages/Reserve';
// import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/Aboutus';
import Contact from './pages/ContactUs';
import TripPage from './pages/TripPage';
import TripsList from './components/TripList';
import ExploreTrips from './pages/ExploreTrips';

function App() {
  return (
    <Router>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trip" element={<TripPage />} />
        <Route path="/exploretrips" element={<ExploreTrips />} />
        {/* Add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
