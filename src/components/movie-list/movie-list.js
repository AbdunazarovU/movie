import "./movie-list.css"

import { Component } from "react"
import MovieListItem from "../movie-list-item/movie-list-item"

class MovieList extends Component {
  render() {
    const {data, onDelete} = this.props
    return (
      <ul className='movie-list'>
        {data?.map((e) => (
          <MovieListItem {...e} key={e.id} onDelete={() => onDelete(e.id)} />
        ))}
      </ul>
    )
  }

}

// const MovieList = ({data, onDelete}) => {
//   return (
//     <ul className='movie-list'>
//       {data?.map((e) => (
//         <MovieListItem {...e} key={e.id} onDelete={() => onDelete(e.id)} />
//       ))}
//     </ul>
//   )
// }

export default MovieList
