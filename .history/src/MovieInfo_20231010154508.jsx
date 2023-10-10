const MovieInfo = ({ movie }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500'
  return (
    <li>
      <div className="movie-list"></div>
      <h1>{movie.title}</h1>
      <div>{movie.release_date}</div>
      <img src={`${baseURL}${movie.poster_path}`} alt="" />
    </li>
  )
}

export default MovieInfo
