import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, addToFavs }) {
  // console.log(movies);
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} addToFavs={addToFavs} />
        ))}
      </div>
    </div>
  );
}
