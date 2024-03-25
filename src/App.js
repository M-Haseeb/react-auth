// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
