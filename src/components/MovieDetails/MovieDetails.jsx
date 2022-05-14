import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetailItem from '../MovieDetailItem/MovieDetailItem';
import MovieItem from '../MovieItem/MovieItem';

function MovieDetails() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  const movies = useSelector((store) => store.movies);

  console.log(movies);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = () => {
    dispatch({
      type: 'FETCH_GENRES',
    });
  };

  return (
    <>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <ul>
                {genres.map((genre) => {
                  return <MovieDetailItem key={genre.id} genre={genre} />;
                })}
              </ul>
              <p>{movie.description}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieDetails;
