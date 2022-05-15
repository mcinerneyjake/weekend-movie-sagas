import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  const dispatch = useDispatch();
  // Select all movies from the 'movies' reducer using useSelector.
  const movies = useSelector((store) => store.movies);

  // On load, useEffect dispatches to rootSaga in index.js and GETs all movies from database.
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      {/* Map through all movies to render each individual movie stored within the 'movies' reducer. */}
      <h1>Movie List</h1>
      <div className='movies-container'>
        <section className='movies'>
          {movies &&
            movies.map((movie) => {
              return <MovieItem key={movie.id} movie={movie} />;
            })}
        </section>
      </div>
    </main>
  );
}

export default MovieList;
