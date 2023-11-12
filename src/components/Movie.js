import React from "react";
import "./Movie.css";

export default function Movie({ movie, addToFavs }) {
  // ======= FUNCTIONS =======
  const handleClick = () => {
    console.log(movie.id, movie.title);
    // Здесь вы можете получить данные, которые вы хотите добавить в favs
    const newData = [movie]; // Пример новых данных

    // Вызываем функцию addToFavs из родительского компонента
    addToFavs(newData);
  };

  // ======= RENDER =======
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <div className="card_container">
          <img
            className="card_poster"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            // src="{movie.avatar}"
            alt={movie.title}
          />
          <div className="card_body">
            <div className="card_title">{movie.title}</div>
            <div className="card_rating-container">
              <div className="card_rating">{movie.vote_average}</div>
              <button
                className="btn btn-warning add-tofavorite"
                onClick={handleClick}
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
