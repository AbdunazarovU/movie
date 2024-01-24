import "./movie-list.css"

import MovieListItem from "../movie-list-item/movie-list-item"

const MovieList = ({data}) => {
  return (
    <ul className='movie-list'>
      {data?.map((e) => (
        <MovieListItem name={e.name} viewers={e.viewers} favourite={e.favourite} />
      ))}
    </ul>
  )
}

export default MovieList
