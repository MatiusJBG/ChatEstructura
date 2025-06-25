import React, { useState } from 'react';
import SocialNetwork from './components/SocialNetwork';
import AuthTransition from './components/AuthTransition';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  // Simulación de login
  const handleLogin = (credentials) => {
    setUser({ name: credentials.identifier || credentials.email, avatar: '' });
    setIsAuthenticated(true);
  };

  // Simulación de registro
  const handleRegister = (data) => {
    setUser({ name: data.name, avatar: '' });
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setShowRegister(false);
  };

  const handleSwitchToLogin = () => setShowRegister(false);
  const handleSwitchToRegister = () => setShowRegister(true);

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          <AuthTransition
            showRegister={showRegister}
            onLogin={handleLogin}
            onRegister={handleRegister}
            onSwitchToLogin={handleSwitchToLogin}
            onSwitchToRegister={handleSwitchToRegister}
          />
        ) : (
          <SocialNetwork user={user} onLogout={handleLogout} />
        )}
      </header>
    </div>
  );
}

export default App;
