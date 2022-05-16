import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieDetails() {
  // Select a single movie and genre from their respective reducers using useSelector.
  const movies = useSelector((store) => store.movie);
  const genres = useSelector((store) => store.genres);

  const history = useHistory();

  // Call history.push('/') to route to the MovieList component.
  // goToMovieList is called on the button onClick below.
  const goToMovieList = () => {
    history.push('/');
  };

  return (
    <div className='movie-details'>
      {/* Map through movies and genres to render each movie and genre stored within the reducers. */}
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      <h3 className='genre'>Genre:</h3>
      {genres &&
        genres.map((genre) => {
          return <p key={genre.name + genre.id}>{genre.name}</p>;
        })}
      <Button onClick={goToMovieList}>Back to Movie List</Button>
    </div>
  );
}

export default MovieDetails;
