import { useState, useCallback, useEffect } from 'react';
import useLoginService from './useLoginService';

export default function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  const loginService = useLoginService(username, password);

  useEffect(() => {
    if (!loading) return;
    setError(null);
    setProfile(null);
  }, [loading]);

  const signOut = () => {
    setProfile(null);
    setUsername('');
    setPassword('');
  };

  const signIn = useCallback(async () => {
    setLoading(true);
    const [_profile, _error] = await loginService();
    setProfile(_profile);
    setError(_error);
    setLoading(false);
  }, [loginService]);

  return {
    username,
    setUsername,
    password,
    setPassword,
    loading,
    error,
    profile,
    signIn,
    signOut,
  };
}
