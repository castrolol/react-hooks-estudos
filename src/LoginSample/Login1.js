import React, { useState, useCallback } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  const signIn = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post('http://localhost:5001/login', {
        username,
        password,
      });
      setProfile(data);
    } catch (e) {
      const message = e?.response?.data?.message ?? 'Ocorreu um erro';

      setError(message);
    } finally {
      setLoading(false);
    }
  }, [username, password]);

  return !profile ? (
    <div className="login">
      <input
        disabled={loading}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        disabled={loading}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span>{error}</span>
      <button disabled={loading} onClick={signIn}>
        Entrar
      </button>
    </div>
  ) : (
    <div className="profile">
      <img src={profile.avatar} />
      <h1> {profile.name} </h1>
      <h2> {profile.email} </h2>
      <button onClick={() => setProfile(null)}>Sair</button>
    </div>
  );
}
