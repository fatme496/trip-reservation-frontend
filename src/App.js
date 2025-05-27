import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/Aboutus';
import Contact from './pages/ContactUs';
import TripPage from './pages/TripPage';
import ExploreTrips from './pages/ExploreTrips';
import TripDetails from './pages/TripDetails';
import MyReservations from './pages/MyReservations';
import PostTrip from './pages/PostTrip';
import Footer from '../src/components/Footer';

function App() {
  return (
    <Router>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trip" element={<TripPage />} />
        <Route path="/exploretrips" element={<ExploreTrips />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/post-trip" element={<PostTrip />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
