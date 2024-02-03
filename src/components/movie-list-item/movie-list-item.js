import "./movie-list-item.css"

const MovieListItem = (props) => {
  const { name, viewers, onDelete, onToggleProp, like, favourite } = props
  // let className = "list-group-item d-flex justify-content-between"
  // if(favourite) {
  //   className += " favourite"
  // }

  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"} ${like && "like"}`}>
        <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like" >{name}</span>
        <input type="number" name={name} className="list-group-item-input" defaultValue={viewers} />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="favourite" type="button" >
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete} type="button" >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
  )
}

export default MovieListItem
