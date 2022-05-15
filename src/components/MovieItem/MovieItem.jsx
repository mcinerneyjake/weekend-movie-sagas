import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const getMovieAndGenres = () => {
    getMovie();
    getGenre();
    goToMovieDetails();
  };

  const getMovie = () => {
    dispatch({
      type: 'FETCH_MOVIE',
      payload: movie.id,
    });
  };

  const getGenre = () => {
    dispatch({
      type: 'FETCH_GENRES',
      payload: movie.id,
    });
  };

  const goToMovieDetails = () => {
    history.push('/details');
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} onClick={getMovieAndGenres} />
    </div>
  );
}

export default MovieItem;
