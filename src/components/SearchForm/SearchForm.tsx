import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchShows} from "../../store/searchThunk";

const SearchForm = () => {

    const dispatch = useAppDispatch();

    const shows = useAppSelector(state => state.show.shows);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(fetchShows(e.target.value))
    };


    return (
        <div className="mt-5 formDiv shadow-lg p-3 mb-5 bg-body-tertiary rounded">
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

                            {
                                shows.map((every) => (
                                    <li key={every.show.name}
                                        className="autocompleteItem">{every.show.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;