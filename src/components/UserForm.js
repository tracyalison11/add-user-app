import React, { useState } from 'react';

import './UserForm.css';

const UserForm = props => {
  const [enteredUsername, setUsername] = useState('');
  const [enteredAge, setAge] = useState('');

  const usernameChangeHandler = event => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random.toString()
    }

    props.onSaveUserData(userData);

    setUsername('');
    setAge('');
  };

  return (
    <form className="user-form" onSubmit={submitHandler}>
      <div className="user-form__controls">
        <div className="user-form__control">
          <label>Username</label>
          <input type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        </div>
        <div className="user-form__control">
          <label>Age (Years)</label>
          <input type="number" min="0" value={enteredAge} onChange={ageChangeHandler}/>
        </div>
        <div className="user-form__actions">
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  )
};

export default UserForm;
