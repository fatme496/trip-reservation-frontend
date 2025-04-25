import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // You'll create this file soon
import Header from './components/Header';
import Reserve from './pages/Reserve';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        {/* Add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
