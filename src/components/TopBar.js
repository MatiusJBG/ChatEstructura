import React from 'react';

function TopBar({ onShowProfile, onShowFriends, onAddFriend, onSendMessage }) {
  return (
    <nav className="top-bar">
      <button title="Perfil" onClick={onShowProfile} className="icon-btn">
        <span className="material-icons">person</span>
      </button>
      <button title="Amigos" onClick={onShowFriends} className="icon-btn">
        <span className="material-icons">group</span>
      </button>
      <button title="Añadir Amigo" onClick={onAddFriend} className="icon-btn">
        <span className="material-icons">person_add</span>
      </button>
      <button title="Mensaje" onClick={onSendMessage} className="icon-btn">
        <span className="material-icons">send</span>
      </button>
    </nav>
  );
}

export default TopBar;
