import React from 'react';

function MainInterface({ onShowProfile, onShowFriends, onAddFriend, onSendMessage }) {
  return (
    <div className="main-interface">
      <button onClick={onShowProfile}>Ver Perfil</button>
      <button onClick={onShowFriends}>Ver Amigos</button>
      <button onClick={onAddFriend}>Añadir Amigo</button>
      <button onClick={onSendMessage}>Enviar Mensaje</button>
    </div>
  );
}

export default MainInterface;
