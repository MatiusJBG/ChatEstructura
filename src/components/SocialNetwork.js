import React, { useState, useEffect } from 'react';
import PostBox from './PostBox';
import FriendList from './FriendList';
import MessageList from './MessageList';
import './PostBox.css';

function SocialNetwork({ user, onLogout }) {
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState('home');
  const [friends, setFriends] = useState([
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Luis' },
    { id: 3, name: 'Carlos' }
  ]);
  const [chats, setChats] = useState({});
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const handleShowProfile = () => setSection('profile');
  const handleShowFriends = () => setSection('friends');
  const handleAddFriend = () => setSection('add-friend');
  const handleSendMessage = () => setSection('messages');

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSelectChat = (friend) => {
    setSelectedFriend(friend);
    setSection('messages');
  };

  const handleSendChatMessage = () => {
    if (!selectedFriend || !messageInput.trim()) return;
    setChats(prev => {
      const prevMsgs = prev[selectedFriend.id] || [];
      return {
        ...prev,
        [selectedFriend.id]: [
          ...prevMsgs,
          { text: messageInput, fromMe: true, time: new Date().toLocaleTimeString(), read: true }
        ]
      };
    });
    setMessageInput('');
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="app-container" style={{ display: 'flex', minHeight: '100vh', height: '100vh', width: '100vw', background: '#181a20', boxSizing: 'border-box' }}>
      {/* Barra lateral izquierda */}
      <div style={{ width: 'min(220px, 30vw)', background: 'transparent', padding: '32px 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 120 }}>
        <img
          src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
          alt="avatar"
          style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }}
        />
        <div style={{ color: '#e3e3e3', fontWeight: 600, fontSize: 18, textAlign: 'center', marginBottom: 24 }}>{user.name}</div>
        {/* Botones de acción como íconos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', alignItems: 'center', marginBottom: 32 }}>
          <button title="Perfil" onClick={handleShowProfile} className="icon-btn" style={{ fontSize: 28 }}>
            <span className="material-icons">person</span>
          </button>
          <button title="Amigos" onClick={handleShowFriends} className="icon-btn" style={{ fontSize: 28 }}>
            <span className="material-icons">group</span>
          </button>
          <button title="Añadir Amigo" onClick={handleAddFriend} className="icon-btn" style={{ fontSize: 28 }}>
            <span className="material-icons">person_add</span>
          </button>
          <button title="Mensaje" onClick={handleSendMessage} className="icon-btn" style={{ fontSize: 28 }}>
            <span className="material-icons">send</span>
          </button>
        </div>
        <button
          onClick={onLogout}
          style={{
            background: 'linear-gradient(90deg, #ff4a5c 0%, #ff8a65 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 0',
            width: '90%',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            marginTop: 'auto',
            marginBottom: 32,
            boxShadow: '0 2px 8px #0d1117',
            transition: 'background 0.2s',
          }}
        >
          Cerrar sesión
        </button>
      </div>
      {/* Contenido principal */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minWidth: 0, width: '100%' }}>
  <div className="brand-title" style={{ marginTop: 32, marginBottom: 24, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>FI-CHAT</div>
        <div style={{ width: '100%', maxWidth: 600, flex: '0 1 auto', padding: '0 2vw' }}>
          {/* Renderizado condicional de secciones */}
          {section === 'home' && <PostBox user={user} />}
          {section === 'profile' && <div style={{color:'#fff'}}>Aquí va el perfil del usuario</div>}
          {section === 'friends' && (
            <FriendList friends={friends} onSendMessage={handleSelectChat} />
          )}
          {section === 'add-friend' && <div style={{color:'#fff'}}>Aquí va el formulario para añadir amigo</div>}
          {section === 'messages' && (
            <div style={{color:'#fff', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <MessageList chats={chats} friends={friends} onSelectChat={handleSelectChat} />
              {selectedFriend && (
                <div style={{marginTop:24, width:'100%', maxWidth:400, background:'#222', borderRadius:8, padding:16}}>
                  <h4 style={{color:'#fff', marginBottom:8}}>Chat con {selectedFriend.name}</h4>
                  <div style={{minHeight:80, maxHeight:200, overflowY:'auto', background:'#181a20', borderRadius:6, padding:8, marginBottom:12}}>
                    {(chats[selectedFriend.id] || []).map((msg, idx) => (
                      <div key={idx} style={{textAlign: msg.fromMe ? 'right' : 'left', marginBottom:6}}>
                        <span style={{background: msg.fromMe ? '#4a90e2' : '#333', color:'#fff', borderRadius:12, padding:'6px 12px', display:'inline-block'}}>{msg.text}</span>
                        <span style={{fontSize:10, color:'#aaa', marginLeft:8}}>{msg.time}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{display:'flex', gap:8}}>
                    <input
                      type="text"
                      value={messageInput}
                      onChange={e => setMessageInput(e.target.value)}
                      placeholder="Escribe un mensaje..."
                      style={{flex:1, borderRadius:6, border:'1px solid #444', padding:'8px', background:'#181a20', color:'#fff'}}
                    />
                    <button onClick={handleSendChatMessage} style={{background:'#4a90e2', color:'#fff', border:'none', borderRadius:6, padding:'8px 16px', fontWeight:600}}>Enviar</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialNetwork;
