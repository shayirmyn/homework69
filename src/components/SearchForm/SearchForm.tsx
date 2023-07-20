import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchShows, oneShow} from "../../store/searchThunk";
import ShowItem from "../ShowItem/ShowItem";

const SearchForm = () => {

    const dispatch = useAppDispatch();

    const shows = useAppSelector(state => state.show.shows);

    console.log(shows);

    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(fetchShows(e.target.value))
        setValue(e.target.value);
    };

    const filteredShows = shows.filter(every => {
        return every.show.name.toLowerCase().includes(value.toLowerCase());
    });


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
                                {
                                    shows.map((every) => (
                                        <li key={every.show.name}
                                            onClick={() => dispatch(oneShow(every.show.id))}
                                            className="autocompleteItem">{every.show.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flexDiv2 shadow-lg p-1 mt-5 ms-5 bg-body-tertiary rounded" >
                {
                   value ? filteredShows.map((every) => (
                        <div key={every.show.id}>
                            <ShowItem show={every.show} key={every.show.id}/>
                        </div>
                    )) : null
                }
            </div>
        </div>
    );
};

export default SearchForm;