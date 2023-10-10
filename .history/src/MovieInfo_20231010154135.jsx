const MovieInfo = ({ movie }) => {
  const baseURL = 'https://api.themoviedb.org/3/movie/now_playing'
  return (
    <li>
      <h1>{movie.title}</h1>
      <div>{movie.release_date}</div>
      <img src={`${baseURL}/${movie.poster_path}`} alt="" />
    </li>
  )
}

export default MovieInfo
