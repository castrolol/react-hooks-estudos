import { useCallback } from 'react';
import axios from 'axios';

export default function useLoginService(username, password) {
  return useCallback(async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      return [data];
    } catch (e) {
      const message = e?.response?.data?.message ?? 'Ocorreu um erro';

      return [null, message];
    }
  }, [username, password]);
}
