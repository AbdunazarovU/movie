import {Component} from "react";
import "./search-panel.css"

class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: ""
    }
  }

  updateTermHandler = e => {
    const term = e.target.value
    this.setState({ term })
    this.props.updateTermHandler(term)
  }
  render() {
    return (
      <input
        className="form-control search-input"
        onChange={this.updateTermHandler}
        type="text"
        placeholder="Kinolar qidirish"
        value={this.state.term}
      />
    )
  }
}
export default SearchPanel
