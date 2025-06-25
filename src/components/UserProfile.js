import React from 'react';

function UserProfile({ user }) {
  if (!user) return null;
  const name = user.name || user.identifier || 'Usuario';
  const email = user.email || '';
  const friends = user.friends || [];
  return (
    <div className="user-profile">
      <div className="user-avatar">
        <span>{name[0]}</span>
      </div>
      <h2>{name}</h2>
      <p className="user-email">{email}</p>
      <p className="user-friends">Amigos: <b>{friends.length}</b></p>
    </div>
  );
}

export default UserProfile;
