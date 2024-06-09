import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setStatusFilter } from "../../redux/filtersSlice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.box}>
      <label htmlFor={id} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={id}
        value={filter}
        onChange={(e) => dispatch(setStatusFilter(e.target.value.trim()))}
        className={css.input}
      ></input>
    </div>
  );
}
