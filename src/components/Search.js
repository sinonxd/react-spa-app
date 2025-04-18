import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b18a7b983444c944d7dae190caca8148&query=${query}`);
    setResults(response.data.results);
  };

  return (
    <div>
      <h1>Buscar Películas</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por título"
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {results.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;