import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"

const App = () => {


  const data = [
    {id: 1, name: "Empire of osman", viewers: 811, favourite: false},
    {id: 2, name: "Ertugrul", viewers: 890, favourite: true},
    {id: 3, name: "Omar", viewers: 999, favourite: false},
  ]

  const onDelete = id => {
    console.log(id)
  }

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo/>
        <div className="search-panel" >
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} onDelete={onDelete} />
        <MoviesAddForm />
      </div>
    </div>
  )
}

export default App;