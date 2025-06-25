import React from 'react';
import './PostBox.css';

function PostBox({ user }) {
  return (
    <div className="postbox-container">
      <div className="postbox-input-row">
        <img className="postbox-avatar" src={user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name)} alt="avatar" />
        <input
          className="postbox-input"
          placeholder={`¿Qué estás pensando, ${user.name}?`}
          readOnly
        />
      </div>
      <hr className="postbox-divider" />
      <div className="postbox-actions">
        <button className="postbox-action live"><span role="img" aria-label="video">📹</span> Video en vivo</button>
        <button className="postbox-action photo"><span role="img" aria-label="foto">🖼️</span> Foto/video</button>
        <button className="postbox-action feeling"><span role="img" aria-label="sentimiento">😊</span> Sentimiento/actividad</button>
      </div>
    </div>
  );
}

export default PostBox;
