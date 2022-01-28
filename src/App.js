import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const DUMMY_USERS = [
  {
    key: Math.random.toString(),
    username: 'Gizmo',
    age: 9
  }
];

const App = props => {
  const [users, saveUser] = useState(DUMMY_USERS);

  const saveUserDataHandler = (enteredUserData) => {
    saveUser(prevUsers => {
     return [enteredUserData, ...prevUsers]
    });
  };

  return (
    <div>
      <UserForm onSaveUserData={saveUserDataHandler} />
      <UserList listedUsers={users} />
    </div>
  );
}

export default App;
