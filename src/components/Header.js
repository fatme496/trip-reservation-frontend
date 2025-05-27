import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiUser } from 'react-icons/fi';
import '../styles/Header.css';
import Logo from './Logo';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = async () => {
    try {
      await fetch('/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });
      logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo-container" onClick={() => navigate('/')}>
        <Logo />
      </div>

      <div className="nav-user-container">
        <nav className="nav">
          <a href="/exploretrips" className="nav-link">Explore Trips</a>
          <a href="/post-trip" className="nav-link">Post Trip</a>
          <a href="/my-reservations" className="nav-link">My Reservations</a>
          {!user && (
            <a href="/signup" className="nav-link">Sign Up</a>
          )}
        </nav>

        {user && (
          <div className="user-menu" ref={menuRef}>
            <button className="user-icon" onClick={() => setMenuOpen(!menuOpen)}>
              <FiUser size={20} />
            </button>
            {menuOpen && (
              <div className="dropdown">
                {user && <p className="profile-name">{user.data.name}</p>}
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;