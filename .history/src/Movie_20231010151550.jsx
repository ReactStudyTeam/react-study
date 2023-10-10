import MovieInfo from './MovieInfo.jsx'

const Movie = () => {
  const getMovieInfo = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2FiNzk3ZDIwZjg1YmVkZmY3MDUwY2QxY2E1OTJmZSIsInN1YiI6IjY1MjRkZDhjYjAwNDBhMDBhZDNkZTgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v4ia9keMaTTQet3IEk56vjaDS1-U9yua6AfwGjAftSo'
      }
    }

    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      options
    )
      .then((response) => response.json())
      // .then((response) => response.results)
      .catch((err) => console.error(err))
  }

  const movieInfo = getMovieInfo().results
  console.log(movieInfo)

  return (
    <>
      <h1>영화 정보 페이지</h1>
      <ul>
        <MovieInfo movieInfo={movieInfo} />
      </ul>
    </>
  )
}

export default Movie
