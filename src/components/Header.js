import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

  const goToReserve = () => {
    navigate('/reserve');
  };

    return (
        <header className="header">
            <nav className="nav">
                <a href="/signup" className="nav-link">Sign Up</a>
                <a href="/about" className="nav-link">About Us</a>
                <a href="/contact" className="nav-link">Contact Us</a>
            </nav>
            <div className="header-buttons">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a trip..."
                />
                <button className="reserve-btn" onClick={goToReserve}>RESERVE ONLINE</button>
            </div>
        </header>
    );
};

export default Header;