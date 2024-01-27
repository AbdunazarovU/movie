import "./app.css";

import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Empire of osman", viewers: 811, favourite: false },
        { id: 2, name: "Ertugrul", viewers: 890, favourite: true },
        { id: 3, name: "Omar", viewers: 999, favourite: false }
      ]
    };
  }

  onDelete = id => {
    this.setState(({ data }) => ({ data: data.filter(c => c.id !== id) }));
  };
  addForm = element => {
    console.log(element)
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
