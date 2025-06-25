import React from 'react';

function MessageList({ chats, friends, onSelectChat }) {
  // Ordenar por último mensaje (simulado: el más reciente al principio)
  const sorted = [...friends].sort((a, b) => {
    const aMsgs = chats[a.id] || [];
    const bMsgs = chats[b.id] || [];
    const aTime = aMsgs.length ? aMsgs[aMsgs.length - 1].time || 0 : 0;
    const bTime = bMsgs.length ? bMsgs[bMsgs.length - 1].time || 0 : 0;
    return bTime - aTime;
  });

  return (
    <div className="msg-list-section">
      <div className="msg-list-header">
        <span className="msg-list-title">Mensajes</span>
        <span className="msg-list-requests">Solicitudes</span>
      </div>
      <ul className="msg-list">
        {sorted.map(friend => {
          const msgs = chats[friend.id] || [];
          const lastMsg = msgs.length ? msgs[msgs.length - 1] : null;
          return (
            <li key={friend.id} className="msg-list-item" onClick={() => onSelectChat(friend)}>
              <div className="msg-avatar">
                <span>{friend.name[0]}</span>
              </div>
              <div className="msg-list-info">
                <div className="msg-list-name-row">
                  <span className="msg-list-name">{friend.name}</span>
                  {lastMsg && <span className="msg-list-time">{lastMsg.time ? lastMsg.time : '1d'}</span>}
                </div>
                <div className="msg-list-preview">
                  {lastMsg ? (
                    <span className={lastMsg.fromMe ? 'msg-list-me' : ''}>
                      {lastMsg.fromMe ? 'Tú: ' : ''}{lastMsg.text.length > 30 ? lastMsg.text.slice(0, 30) + '…' : lastMsg.text}
                    </span>
                  ) : (
                    <span className="msg-list-empty">Sin mensajes</span>
                  )}
                </div>
              </div>
              {/* Punto azul para mensaje nuevo simulado */}
              {lastMsg && !lastMsg.fromMe && !lastMsg.read && (
                <span className="msg-list-dot"></span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MessageList;
