import React from 'react';
import UserCard from './UserCard';
import './UserList.css';

const UserList = props => {

  return (
    <ul className="user-list">{(props.listedUsers.map((user) =>
      <UserCard
        key={user.id}
        username={user.username}
        age={user.age}
      />
    ))}</ul>
  )
};

export default UserList;
