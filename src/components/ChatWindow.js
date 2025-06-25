import React from 'react';

function ChatWindow({ friend, messages, onSend, message, setMessage, onBack }) {
  return (
    <div className="chat-window">
      <button className="back-btn" onClick={onBack}>⟵ Volver</button>
      <div className="chat-header">
        <span className="chat-avatar">{friend.name[0]}</span>
        <span className="chat-title">{friend.name}</span>
      </div>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.fromMe ? 'from-me' : 'from-them'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form className="chat-input-row" onSubmit={onSend}>
        <textarea
          className="chat-input"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          required
          rows={1}
        />
        <button type="submit" className="send-msg-btn">Enviar</button>
      </form>
    </div>
  );
}

export default ChatWindow;
