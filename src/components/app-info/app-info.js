import { useContext } from "react"
import "./app-info.css"
import { Context } from "../../context"

const AppInfo = ({allMovieCount, favouriteMovieCount}) => {
  const {state} = useContext(Context)

  return (
    <div className="app-info">
      <p className={"fs-3 text-uppercase "}>Barcha ko'rilgan kinolar soni: {state.data.length}</p>
      <p className={"fs-4 text-uppercase "}>Sevimli film: {state.data.filter(e => e.favourite).length}</p>
    </div>
  )
}

export default AppInfo
