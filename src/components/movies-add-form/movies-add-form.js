import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./movies-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }

  changeHandlerInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFormHandler = (e) => {
    e.preventDefault()
    this.props.addForm({name: this.state.name, viewers: this.state.viewers, id: uuidv4() })
    this.setState({
      name: "",
      viewers: "",
    })
  }

  render() {
    const { name, viewers } = this.state;

    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler} >
          <input
            className="form-control new-post-label"
            onChange={this.changeHandlerInput}
            type="text"
            name="name"
            placeholder="Qanday kino?"
            value={name}
          />
          <input
            className="form-control new-post-label"
            onChange={this.changeHandlerInput}
            type="number"
            name="viewers"
            placeholder="Necha marotaba ko'rilgan?"
            value={viewers}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
