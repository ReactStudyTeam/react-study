import './MovieInfo.css'

const MovieInfo = ({ movie }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500'
  return (
    <li className="movie-list">
      <div></div>
      <h1>제목 : {movie.title}</h1>
      <div>개봉 날짜 : {movie.release_date}</div>
      <img src={`${baseURL}${movie.poster_path}`} alt="" />
    </li>
  )
}

export default MovieInfo
