import "./app.css";

import { useState } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [data, setData] = useState(dataList)
  const [term, setTerm] = useState("")
  const [filter, setFilter] = useState("all")

  const onDelete = id => {
    const newArr = data.filter(e => e.id !== id)
    setData(newArr)
  }

  const addForm = element => {
    const newElement = { id: uuidv4(), name: element.name, viewers: element.viewers, favourite: false, like: false }
    const newData = [...data, newElement]
    setData(newData)
  }

  const onToggleProp = (id, prop) => {
    const newArr = data.map(item => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] }
      }
      return item
    })
    setData(newArr)
  }

  const searchHandler = (arr, term) => {
    if(term === 0){
      return arr
    }
    return arr.filter(e => e.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter(c => c.like)
      case "mostViewers":
        return arr.filter(c => c.viewers > 800)
      default:
        return arr
    }
  }

  const updateTermHandler = (term) => {
    setTerm(term)
  }

  const updateFilterHandler = (filter) => {
    setFilter(filter)
  }


  const allMovieCount = data.length;
  const favouriteMovieCount = data.filter(e => e.favourite).length
  const visibleDate = filterHandler(searchHandler(data, term), filter)


  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo allMovieCount={allMovieCount} favouriteMovieCount={favouriteMovieCount} />
        <div className="search-panel">
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
        </div>
        <MovieList data={visibleDate} onDelete={onDelete} onToggleProp={onToggleProp} />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );
}

export default App;

const dataList = [
  { id: 1, name: "Empire of osman", viewers: 811, favourite: false, like: false },
  { id: 2, name: "Ertugrul", viewers: 890, favourite: false, like: false },
  { id: 3, name: "Omar", viewers: 999, favourite: false, like: false }
]