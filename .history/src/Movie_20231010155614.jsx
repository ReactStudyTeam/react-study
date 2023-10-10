import { useEffect, useState } from 'react'
import MovieInfo from './MovieInfo.jsx'
import styles from './Movie.module.css'

const Movie = () => {
  const [movieInfo, setMovieInfo] = useState([])

  const getMovieInfo = async () => {
    try {
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

      const data = await res.json()
      const results = data.results

      return results
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const movieData = await getMovieInfo()
      setMovieInfo(movieData)
    }

    fetchMovieInfo()
    console.log(movieInfo)
  }, [])

  return (
    <>
      <h1>영화 정보 페이지</h1>
      <ul>
        {movieInfo.map((movie, index) => (
          <MovieInfo key={index} movie={movie} />
        ))}
      </ul>
    </>
  )
}

export default Movie
