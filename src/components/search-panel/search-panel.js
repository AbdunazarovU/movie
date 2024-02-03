import { useState } from "react"
import "./search-panel.css"

const SearchPanel = (prop) => {
  const [term, setTerm] = useState("")

  const updateTermHandler = e => {
    const term = e.target.value
    setTerm(term)
    prop.updateTermHandler(term)
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
