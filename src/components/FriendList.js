import React from 'react';

function FriendList({ friends, onSendMessage }) {
  return (
    <div className="friend-list">
      <h3>Lista de Amigos</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="friend-item">
            <span>{friend.name}</span>
            <button className="send-msg-btn" onClick={() => onSendMessage(friend)}>
              Enviar mensaje
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
