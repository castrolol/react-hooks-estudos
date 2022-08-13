import React, { Component } from 'react';
import axios from 'axios';

const PLACEHOLDER =
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

class GithubClass extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      query: '',
    };
  }

  async search() {
    this.setState({
      loading: true,
      profileImg: null,
      profileName: null,
    });
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${this.state.query}`
      );
      this.setState({
        loading: false,
        profileName: data.name,
        profileImg: data.avatar_url,
      });
    } catch (e) {
      this.setState({
        loading: false,
        profileName: 'Nao encontrado',
        profileImg: null,
      });
    }
  }

  render() {
    const { profileImg, profileName, query, loading } = this.state;

    return (
      <div class="github">
        <div class="header">
          <input
            value={query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          <button onClick={() => this.search()}> Go! </button>
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
}

export default GithubClass;
