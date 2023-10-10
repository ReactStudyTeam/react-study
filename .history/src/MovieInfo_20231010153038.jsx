const MovieInfo = ({ movie }) => {
  return (
    <li>
      <div>{movie.release_date}</div>
      <img src={movie.poster_path} alt="" />
    </li>
  )
}

export default MovieInfo
