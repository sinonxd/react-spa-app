import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b18a7b983444c944d7dae190caca8148`);
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Calificación: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetail;