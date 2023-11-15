import React, { useState, useEffect } from "react";
import "./Favorites.css";

export default function Favorites({ favs, deleteItem }) {
  return (
    <>
      <div className="favs">
        <div className="favs-header">
          <h3>List of Favs:</h3>
          <h6>You have {favs.length} favorite(s) movies</h6>
          <div className="movies-list">
            <ul>
              {favs.length === 0 ? (
                <p>Add any movie to favorites!</p>
              ) : (
                favs.map((fav) => (
                  <li key={fav.id} className="fav-card">
                    <div className="fav-card-header">
                      <div className="title">Name: {fav.title}</div>
                      <img src={fav.avatar} alt="" />
                    </div>
                    <div className="fav-card-body">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(fav.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
