import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchShows, oneShow } from "../../store/searchThunk";
import ShowItem from "../ShowItem/ShowItem";
import { NavLink, Outlet } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useAppDispatch();

  const shows = useAppSelector((state) => state.show.shows);

  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchShows(e.target.value));
    setValue(e.target.value);
  };

  const filteredShows = shows.filter((every) => {
    return every.show.name.toLowerCase().includes(value.toLowerCase());
  });

  const onShowClick = async (id: number) => {
    await dispatch(oneShow(id));
    setValue("");
  };

  return (
    <div className="flexDiv1">
      <div className="mt-5 formDiv shadow-lg p-1 mb-5 bg-body-tertiary rounded">
        <div className="col-9 m-auto mt-5 mb-5">
          <h4>Search for TV Show</h4>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                onChange={onChange}
                placeholder="search.."
              />
              <ul className="autocomplete">
                {shows.map((every) => (
                  <li
                    key={Math.random()}
                    onClick={() => onShowClick(every.show.id)}
                  >
                    <NavLink
                      className="navLink autocompleteItem"
                      to={`/shows/${every.show.id}`}
                    >
                      {every.show.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
      <div className="flexDiv2 shadow-lg p-1 mt-5 ms-5 bg-body-tertiary rounded">
        {value.length > 0 ? (
          filteredShows.map((every) => (
            <div key={Math.random()}>
              <ShowItem show={every.show} key={every.show.id} />
            </div>
          ))
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default SearchForm;
