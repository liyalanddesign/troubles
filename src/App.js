import React, { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";

function App() {
  // ======= STATES =======
  const [movieList, setMovieList] = useState([]);
  const [favs, setFav] = useState([]);

  // ======= API CONNECTION =======
  let npsw = "Bearer " + process.env.REACT_APP_AUTH;
  useEffect(() => {
    // GET LIST OF ALL MOVIES FROM SERVER
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: npsw,
        },
      };
      const res = await fetch(
        "https://6531d4944d4c2e3f333d4de9.mockapi.io/api/books/"
      );
      const fetchedResp = await res.json();

      setMovieList(fetchedResp);
    };
    fetchMovies();
  }, []);

  // ======= FUNCTIONS =======

  const handleAdd = async (ID) => {
    setFav([...favs, ID]);
  };

  const handleDelete = async (id) => {
    await fetch("https://6531d4944d4c2e3f333d4de9.mockapi.io/api/books/" + id, {
      method: "DELETE",
    });
    setFav(favs.filter((item) => item.id !== id));
  };

  // ======= RENDER =======
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row p-3">
            <div className="hero text-center">
              <h1>Week 15 Assignment</h1>
              <p>Add movies to list</p>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row mt-5">
          <div className="col col-md-12 col-lg-3">
            <Favorites favs={favs} deleteItem={handleDelete} />
            {/* <Favorites movies={movieList} favs={favs} /> */}
          </div>
          <div className="col col-md-12 col-lg-9">
            <MovieList movies={movieList} addToFavs={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
