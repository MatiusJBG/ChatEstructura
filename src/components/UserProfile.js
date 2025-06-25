import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="user-avatar">
        <span>{user.name[0]}</span>
      </div>
      <h2>{user.name}</h2>
      <p className="user-email">{user.email}</p>
      <p className="user-friends">Amigos: <b>{user.friends.length}</b></p>
    </div>
  );
}

export default UserProfile;
