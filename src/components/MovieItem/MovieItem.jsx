function MovieItem(prop) {
  return (
    <div key={prop.movie.id}>
      <h3>{prop.movie.title}</h3>
      <img src={prop.movie.poster} alt={prop.movie.title} />
    </div>
  );
}

export default MovieItem;
