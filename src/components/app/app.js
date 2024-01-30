import "./app.css";

import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Empire of osman", viewers: 811, favourite: false, like: false },
        { id: 2, name: "Ertugrul", viewers: 890, favourite: false, like: false },
        { id: 3, name: "Omar", viewers: 999, favourite: false, like: false }
      ],
      term: "",
      filter: "all",
    };
  }

  onDelete = id => {
    this.setState(({ data }) => ({ data: data.filter(c => c.id !== id) }));
  };

  addForm = element => {
    const newElement = { id: uuidv4(), name: element.name, viewers: element.viewers, favourite: false, like: false }
    this.setState(({ data }) => ({
      data: [...data, newElement],
    }))
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  searchHandler = (arr, term) => {
    if(term.length === 0) {
      return arr
    }
    return arr.filter(e => e.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }
  updateTermHandler = (term) => {
    this.setState({term})
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter(c => c.like)
      case "mostViewers":
        return arr.filter(c => c.viewers > 800)
      default:
        return arr
    }
  }
  updateFilterHandler = (filter) => {
    this.setState({filter})
  }


  render() {
    const { data, term, filter } = this.state;
    const allMovieCount = data.length;
    const favouriteMovieCount = data.filter(e => e.favourite).length
    const visibleDate = this.filterHandler(this.searchHandler(data, term), filter)

    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMovieCount={allMovieCount} favouriteMovieCount={favouriteMovieCount} />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
          </div>
          <MovieList data={visibleDate} onDelete={this.onDelete} onToggleProp={this.onToggleProp} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
