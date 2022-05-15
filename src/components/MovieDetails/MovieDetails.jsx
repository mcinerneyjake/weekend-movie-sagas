import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    <>
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
      {genres &&
        genres.map((genre) => {
          return <p>{genre.name}</p>;
        })}
      <button onClick={goToMovieList}>Back to Movie List</button>
    </>
  );
}

export default MovieDetails;
