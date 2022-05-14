function MovieItem(movie) {
  return (
    <div key={movie.movie.id}>
      <h3>{movie.movie.title}</h3>
      <img src={movie.movie.poster} alt={movie.movie.title} />
    </div>
  );
}

export default MovieItem;
