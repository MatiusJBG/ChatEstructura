import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';
import FriendList from './FriendList';
import TopBar from './TopBar';
import ChatWindow from './ChatWindow';

function SocialNetwork() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState('main');
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [chats, setChats] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        setUser({ ...response.data, friends: [
          { id: 2, name: 'Jane Doe' },
          { id: 3, name: 'Alice Smith' }
        ] });
        setLoading(false);
      })
      .catch((err) => {
        setError('Error al cargar usuario');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const goTo = (newView) => {
    setHistory((h) => [...h, view]);
    setView(newView);
  };
  const goBack = () => {
    setView((prev) => {
      const last = history[history.length - 1] || 'main';
      setHistory((h) => h.slice(0, -1));
      return last;
    });
  };

  const handleShowProfile = () => goTo('main');
  const handleShowFriends = () => goTo('friends');
  const handleAddFriend = () => goTo('addFriend');
  const handleSendMessage = (friend) => {
    setSelectedFriend(friend);
    setMessage('');
    goTo('chat');
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!selectedFriend) return;
    setChats((prev) => {
      const prevMsgs = prev[selectedFriend.id] || [];
      return {
        ...prev,
        [selectedFriend.id]: [...prevMsgs, { text: message, fromMe: true }]
      };
    });
    setMessage('');
    // Simulación de respuesta automática
    setTimeout(() => {
      setChats((prev) => {
        const prevMsgs = prev[selectedFriend.id] || [];
        return {
          ...prev,
          [selectedFriend.id]: [...prevMsgs, { text: '¡Mensaje recibido!', fromMe: false }]
        };
      });
    }, 900);
  };

  return (
    <div>
      <TopBar
        onShowProfile={handleShowProfile}
        onShowFriends={handleShowFriends}
        onAddFriend={handleAddFriend}
        onSendMessage={() => goTo('friends')}
      />
      {view === 'main' && (
        <UserProfile user={user} />
      )}
      {view === 'friends' && (
        <div>
          <button className="back-btn" onClick={goBack}>⟵ Volver</button>
          <FriendList friends={user.friends} onSendMessage={handleSendMessage} />
        </div>
      )}
      {view === 'addFriend' && (
        <div className="card-message">
          <button className="back-btn" onClick={goBack}>⟵ Volver</button>
          <h3>Funcionalidad para añadir amigo próximamente...</h3>
        </div>
      )}
      {view === 'chat' && selectedFriend && (
        <ChatWindow
          friend={selectedFriend}
          messages={chats[selectedFriend.id] || []}
          onSend={handleSend}
          message={message}
          setMessage={setMessage}
          onBack={goBack}
        />
      )}
    </div>
  );
}

export default SocialNetwork;
