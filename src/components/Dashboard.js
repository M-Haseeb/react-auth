// components/Dashboard.js
import React from 'react';

function Dashboard({ onLogout }) {
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Trigger logout callback
    onLogout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
