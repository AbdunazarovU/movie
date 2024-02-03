import { useState } from "react";

import "./movies-add-form.css";

const MoviesAddForm = ({addForm}) => {
  const [state, setState] = useState({name: "", viewers: ""})

  const changeHandlerInput = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const addFormHandler = (e) => {
    e.preventDefault()
    if(state.name === "" || state.viewers === "") return
    addForm({name: state.name, viewers: state.viewers })
    setState({
      name: "",
      viewers: "",
    })
  }

  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler} >
        <input
          className="form-control new-post-label"
          onChange={changeHandlerInput}
          type="text"
          name="name"
          placeholder="Qanday kino?"
          value={state.name}
          autoComplete={"true"}
        />
        <input
          className="form-control new-post-label"
          onChange={changeHandlerInput}
          type="number"
          name="viewers"
          placeholder="Necha marotaba ko'rilgan?"
          value={state.viewers}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
}

export default MoviesAddForm;
