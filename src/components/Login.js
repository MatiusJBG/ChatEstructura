import React, { useState } from 'react';

function Login({ onLogin, onSwitchToRegister }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (identifier && password) {
      onLogin({ identifier, password });
    }
  };

  return (
    <div className="login-card">
      <div className="brand-title">FI-SEXY</div>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="login-identifier">Correo electrónico o nombre de usuario</label>
        <input
          id="login-identifier"
          type="text"
          placeholder="Correo electrónico o nombre de usuario"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          className="login-input"
          required
        />
        <label htmlFor="login-password">Contraseña</label>
        <input
          id="login-password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="send-msg-btn" style={{ width: '100%', marginTop: 12 }}>
          Iniciar sesión
        </button>
      </form>
      <button className="switch-auth-btn" onClick={onSwitchToRegister}>
        ¿No tienes cuenta? Regístrate
      </button>
    </div>
  );
}

export default Login;
