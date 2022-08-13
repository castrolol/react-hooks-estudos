import React, { useState, useCallback } from 'react';
import useLogin from './hooks1/useLogin';

export default function Login() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    profile,
    signIn,
    signOut,
  } = useLogin();

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
      <button onClick={signOut}>Sair</button>
    </div>
  );
}
