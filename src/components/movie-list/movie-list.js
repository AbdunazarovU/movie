import "./movie-list.css"

import MovieListItem from "../movie-list-item/movie-list-item"

const MovieList = ({data, onDelete}) => {
  return (
    <ul className='movie-list'>
      {data?.map((e) => (
        <MovieListItem {...e} key={e.id} onDelete={() => onDelete(e.id)} />
      ))}
    </ul>
  )
}

export default MovieList
