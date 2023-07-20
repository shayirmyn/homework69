import React from 'react';
import {IShow} from "../../types";

interface IProps {
    show: IShow;
}

const ShowItem: React.FC<IProps> = ({show,}) => {
    return (
            <div className="mt-5 itemDiv shadow-lg p-1 mb-2 bg-body-tertiary rounded">
                <div className="col-9 m-auto mt-5 mb-2">
                    <div className="divImg">
                        <img src={show.image?.original} alt={show.name}/>
                    </div>
                        <div className="form-group mt-3">
                            <h4>{show.name}</h4>
                            <p><strong>genres: </strong>{show.genres}</p>
                        </div>
                </div>
            </div>
    );
};

export default ShowItem;