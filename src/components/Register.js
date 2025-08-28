import React, { useState } from 'react';

function Register({ onRegister, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      onRegister({ name, email, password, friends: [] });
    }
  };

  return (
    <div className="login-card">
  <div className="brand-title">FI-CHAT</div>
      <h2 className="login-title">Crear cuenta</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="register-name">Nombre</label>
        <input
          id="register-name"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
          className="login-input"
          required
        />
        <label htmlFor="register-email">Correo electrónico</label>
        <input
          id="register-email"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <label htmlFor="register-password">Contraseña</label>
        <input
          id="register-password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="send-msg-btn" style={{ width: '100%', marginTop: 12 }}>
          Registrarse
        </button>
      </form>
      <button className="switch-auth-btn" onClick={onSwitchToLogin}>
        ¿Ya tienes cuenta? Inicia sesión
      </button>
    </div>
  );
}

export default Register;
