import { useState, useCallback, useEffect } from 'react';
import useLoginService from './useLoginService';
import useProp from './useProp';

export default function useLogin() {
  const username = useProp('');
  const password = useProp('');
  const loading = useProp(false);
  const error = useProp(null);
  const profile = useProp(null);

  const loginService = useLoginService(username.value, password.value);

  useEffect(() => {
    if (!loading.value) return;
    error.set(null);
    profile.set(null);
  }, [loading]);

  const signOut = () => {
    profile.set(null);
    username.set('');
    password.set('');
  };

  const signIn = useCallback(async () => {
    loading.set(true);
    const [_profile, _error] = await loginService();
    profile.set(_profile);
    error.set(_error);
    loading.set(false);
  }, [loginService]);

  return {
    username,
    password,
    loading: loading.value,
    error: error.value,
    profile: profile.value,
    signIn,
    signOut,
  };
}
