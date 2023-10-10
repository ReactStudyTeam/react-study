import styles from './MovieInfo.module.css'

const MovieInfo = ({ movie }) => {
  const imageBaseURL = 'https://image.tmdb.org/t/p/w500'
  return (
    <li className={styles.movieList}>
      <h1 className={styles.movieTitle}>제목 : {movie.title}</h1>
      <div>개봉 날짜 : {movie.release_date}</div>
      <img src={`${imageBaseURL}${movie.poster_path}`} alt="" />
    </li>
  )
}

export default MovieInfo
