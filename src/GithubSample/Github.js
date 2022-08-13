import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const PLACEHOLDER =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

function Github() {
  const [profileImg, setProfileImg] = useState(null);
  const [profileName, setProfileName] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    setProfileImg(null);
    setProfileName(null);
  }, [loading]);

  const search = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setProfileName(data.name);
      setProfileImg(data.avatar_url);
    } catch (e) {
      setProfileName('Nao encontrado');
    } finally {
      setLoading(false);
    }
  }, [query]);

  return (
    <div class="github">
      <div class="header">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={search}> Go! </button>
      </div>
      <div class="body">
        <img src={profileImg || PLACEHOLDER} />
        {loading ? (
          <h1> Carregando... </h1>
        ) : (
          <h1>{profileName || 'Busque um usuário'}</h1>
        )}
      </div>
    </div>
  );
}

export default Github;
