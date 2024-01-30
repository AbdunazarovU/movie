import "./app-filter.css"

const AppFilter = ({updateFilterHandler, filter}) => {
  return (
    <div className="btn-group">
      {btnArr.map(e => (
        <button className={`btn ${filter === e.name ? "btn-dark" : "btn-outline-dark"}`}   key={e.name} type="button" onClick={() => updateFilterHandler(e.name)} >{e.label}</button>
      ))}
    </div>
  )
}

const btnArr = [
  {name: "all", label: "Barcha kinolar"},
  {name: "popular", label: "Mashhur kinolar"},
  {name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar"},
]

export default AppFilter
