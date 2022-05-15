import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Call getMovie, getGenre, and goToMovieDetails with img onClick.
  const getMovieAndGenres = () => {
    getMovie();
    getGenre();
    goToMovieDetails();
  };

  // getMovie (dispatch sent to rootSaga in index.js).
  const getMovie = () => {
    dispatch({
      type: 'FETCH_MOVIE',
      payload: movie.id,
    });
  };

  // getGenre (dispatch sent to rootSaga in index.js).
  const getGenre = () => {
    dispatch({
      type: 'FETCH_GENRES',
      payload: movie.id,
    });
  };

  // Call history.push('/details') to route to the MovieDetails component.
  const goToMovieDetails = () => {
    history.push('/details');
  };

  return (
    // Return each movie using the prop in the MovieItem function.
    // The prop is sent via the MovieList component.
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} onClick={getMovieAndGenres} />
    </div>
  );
}

export default MovieItem;
