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
  useEffect(() => {
    const fetchUsers = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGM1ZDk2MTUwMTFiMjBiZjFlOWJlODMyZjljZWVkMiIsInN1YiI6IjY1NDFiYWYxNDFhNTYxMDBkZGE5OTQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cs-hLzpgSxBq6pbKA5WJFn4fCUZrpMYuds1kRmamG-U",
        },
      };
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const fetchedResp = await res.json();
      setMovieList(fetchedResp.results);
    };
    fetchUsers();
  }, []);

  // ======= FUNCTIONS =======

  const addToFavs = (newData) => {
    const transformedData = newData.map((item) => {
      const key = Object.keys(item)[0]; // will get [1,2,3....]
      return item[key]; // return obj without key
    });
    console.log(transformedData);
    // setFav([...favs, newData]);
    setFav([...favs, transformedData]);
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
            <Favorites favs={favs} />
          </div>
          <div className="col col-md-12 col-lg-9">
            <MovieList movies={movieList} addToFavs={addToFavs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
