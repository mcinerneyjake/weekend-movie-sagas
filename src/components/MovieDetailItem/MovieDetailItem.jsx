function MovieDetailItem(prop) {
  return <li key={prop.genre.id}>{prop.genre.name}</li>;
}

export default MovieDetailItem;
