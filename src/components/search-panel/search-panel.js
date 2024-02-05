import { useContext, useState } from "react"
import "./search-panel.css"
import { Context } from "../../context"

const SearchPanel = () => {
  const [term, setTerm] = useState("")

  const {_, dispatch} = useContext(Context)

  const updateTermHandler = e => {
    const term = e.target.value
    setTerm(term)
    dispatch({ type: "ON_TERM", payload: term })
  }

  return (
    <input
      className="form-control search-input"
      onChange={updateTermHandler}
      type="text"
      name="search panel"
      placeholder="Kinolar qidirish"
      value={term}
    />
  )
}

export default SearchPanel
