import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/MovieApi';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(id);
      setMovie(movieDetails);
    };
    getMovieDetails();
  }, [id]);

  return (
    movie && (
      <div className="movie-detail">
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
      </div>
    )
  );
};

export default MovieDetail;
