import "./movie-list.css";

import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list">
      {data?.map((e) => (
        <MovieListItem
          {...e}
          key={e.id}
          onDelete={() => onDelete(e.id)}
          onToggleProp={(el) =>
            onToggleProp(e.id, el.currentTarget.getAttribute("data-toggle"))
          }
        />
      ))}
    </ul>
  );
};

export default MovieList;
