// LoginForm.js
import { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLogin, onError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://example.com/api/login', { username, password });
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      onLogin();
    } catch (error) {
      console.error(error);
      onError();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
