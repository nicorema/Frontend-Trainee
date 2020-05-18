import React, { useState } from 'react';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [user,setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      userName,
      userPassword
    }
    setUser(userData);
    setUserName('');
    setUserPassword('');
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <form
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          onChange={event => setUserName(event.target.value)}
          value={userName}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={event => setUserPassword(event.target.value)}
          value={userPassword}
        />
        <button type='submit'>submit</button>
      </form>
      {user && JSON.stringify(user,null,2)}
    </div>
  );
}
