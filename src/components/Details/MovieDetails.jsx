import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
  const genres = useSelector((store) => store.genres);
  const movies = useSelector((store) => store.movie);
  const history = useHistory();

  const goToMovieList = () => {
    history.push('/');
  };

  return (
    <>
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
