import React from "react";
import "./Movie.css";

export default function Movie({ movie, addToFavs }) {
  // ======= FUNCTIONS =======

  // ======= RENDER =======
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <div className="card_container">
          <img className="card_poster" src={movie.avatar} alt={movie.title} />
          <div className="card_body">
            <div className="card_title">{movie.title}</div>
            <div className="card_descr">{movie.description}</div>
            <div className="card_rating-container">
              <div className="card_rating">${movie.price}</div>
              <button
                className="btn btn-warning add-tofavorite"
                onClick={() => addToFavs(movie)}
              >
                Add to fav
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
