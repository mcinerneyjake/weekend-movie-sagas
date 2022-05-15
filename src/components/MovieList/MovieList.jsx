import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { Carousel } from 'react-bootstrap';

function MovieList() {
  const dispatch = useDispatch();
  // Select all movies from the 'movies' reducer using useSelector.
  const movies = useSelector((store) => store.movies);

  // On load, useEffect dispatches to rootSaga in index.js and GETs all movies from database.
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main className='movie-list'>
      {/* Map through all movies to render each individual movie stored within the 'movies' reducer. */}
      <h2>Movie List</h2>
      <div>
        <section>
          <Carousel>
            {movies &&
              movies.map((movie) => {
                return (
                  <Carousel.Item className='carousel'>
                    <MovieItem key={movie.id} movie={movie} />
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </section>
      </div>
    </main>
  );
}

export default MovieList;
