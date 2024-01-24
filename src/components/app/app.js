import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"

const App = () => {
  const data = [
    {name: "Empire of osman", viewers: 811, favourite: false},
    {name: "Ertugrul", viewers: 890, favourite: true},
    {name: "Omar", viewers: 999, favourite: false},
  ]

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo/>
        <div className="search-panel" >
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm/>
      </div>
    </div>
  )
}

export default App;