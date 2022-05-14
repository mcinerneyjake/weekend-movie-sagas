function MovieItem(prop) {

    const getDescription = () => {

    }

  return (
    <div key={prop.movie.id}>
      <h3>{prop.movie.title}</h3>
      <img src={prop.movie.poster} alt={prop.movie.title} onClick={getDescription} />
    </div>
  );
}

export default MovieItem;
