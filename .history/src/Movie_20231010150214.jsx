import MovieInfo from './MovieInfo.jsx'

const Movie = () => {
  const getMovieInfo = () => {
    const res = fetch('https://api.themoviedb.org /3/movie/now_playing', {
      headers: {
        accept: 'application/json',
        Autorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2FiNzk3ZDIwZjg1YmVkZmY3MDUwY2QxY2E1OTJmZSIsInN1YiI6IjY1MjRkZDhjYjAwNDBhMDBhZDNkZTgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v4ia9keMaTTQet3IEk56vjaDS1-U9yua6AfwGjAftSo'
      }
    })
    const jsonRes = res.then((response) => response.json())
    console.log(jsonRes)
  }

  return (
    <>
      <h1>영화 정보 페이지</h1>
      <ul>
        <MovieInfo />
      </ul>
    </>
  )
}

export default Movie
