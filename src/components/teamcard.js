import React from 'react';
import './teamcard.css';

export default function TeamCard({ name, title, image }) {
  return (
    <div className="team-card">
      <img src={image} alt={name} />
      <div className="team-info">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}
