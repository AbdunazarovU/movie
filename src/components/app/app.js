import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"
import { Component } from "react"

class App extends Component {
  data = [
    {id: 1, name: "Empire of osman", viewers: 811, favourite: false},
    {id: 2, name: "Ertugrul", viewers: 890, favourite: true},
    {id: 3, name: "Omar", viewers: 999, favourite: false},
  ]

  onDelete = id => {
    console.log(id)
  }

  render() {
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo/>
          <div className="search-panel" >
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={this.data} onDelete={this.onDelete} />
          <MoviesAddForm />
        </div>
      </div>
    )
  }
}

export default App;