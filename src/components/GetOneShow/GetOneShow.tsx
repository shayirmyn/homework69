import React from "react";
import { useAppSelector } from "../../app/hooks";
import Spinner from "../Spinner/Spinner";

const GetOneShow = () => {
  const show = useAppSelector((state) => state.show.show)!;

  const loading = useAppSelector((state) => state.show.getLoading);

  return (
    show && (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="mt-5 itemDiv2 shadow-lg p-1 mb-2 bg-body-tertiary rounded">
            <div className="col-9 m-auto mt-5 mb-2">
              <div className="divImg">
                <img src={show.image?.original} alt={show.name} />
              </div>
              <div className="form-group mt-3">
                <h4>{show.name}</h4>
                <p>
                  <strong>genres: </strong>
                  {show.genres}
                </p>

                <p>
                  <strong>premiered: </strong>
                  {show.premiered}
                </p>

                <p>
                  <strong>runtime: </strong>
                  {show.runtime}
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default GetOneShow;
