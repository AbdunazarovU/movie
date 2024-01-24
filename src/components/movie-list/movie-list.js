import "./movie-list.css"

import MovieListItem from "../movie-list-item/movie-list-item"

const MovieList = ({data}) => {
  return (
    <ul className='movie-list'>
      {data?.map((e) => (
        <MovieListItem {...e} />
      ))}
    </ul>
  )
}

export default MovieList
