import React from "react";

export default function Favorites({ favs }) {
  // console.log(favs);
  // favs.map((movie) => console.log(movie));

  return (
    <div className="favs">
      <div className="favs-header">
        <h3>List of Favs:</h3>
        <div className="movies-list">
          <ul>
            {favs.length < 1 ? (
              <li>EMPTY</li>
            ) : (
              <>
                <li>HAS FAVS {favs.length}</li>
                {favs.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
