import React from 'react';
import Login from './Login';
import Register from './Register';
import './AuthTransition.css';

function AuthTransition({ showRegister, onLogin, onRegister, onSwitchToLogin, onSwitchToRegister }) {
  return (
    <div className={`auth-transition-container ${showRegister ? 'show-register' : 'show-login'}`}>
      <div className={`auth-form login-form-anim`}>
        <Login onLogin={onLogin} onSwitchToRegister={onSwitchToRegister} />
      </div>
      <div className={`auth-form register-form-anim`}>
        <Register onRegister={onRegister} onSwitchToLogin={onSwitchToLogin} />
      </div>
    </div>
  );
}

export default AuthTransition;
