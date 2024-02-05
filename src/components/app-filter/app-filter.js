import { useContext } from "react";
import "./app-filter.css";
import { Context } from "../../context";

const AppFilter = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="btn-group">
      {btnArr.map((e) => (
        <button
          className={`btn ${
            state.filter === e.name ? "btn-dark" : "btn-outline-dark"
          }`}
          key={e.name}
          type="button"
          onClick={() => dispatch({type: "ON_FILTER", payload: e.name})}
        >
          {e.label}
        </button>
      ))}
    </div>
  );
};

const btnArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
