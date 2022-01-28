import React from 'react';

import './UserCard.css';

const UserCard = props => {
  return (
    <div className="user-card">
      <div className="user-card__user-info">
        <span className="user-card__username">{props.username}</span>
        <span className="user-card__age">{props.age} years old</span>
      </div>
    </div>
  );
};

export default UserCard;
