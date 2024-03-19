import { useState } from "react";
import React from "react";
import MovieCard from "./MovieCard"
import { Filters } from "./Filters";
import { moviesList } from "./data";


function filterMovies(filter) {
  if (filter == 1) {
      return moviesList.filter(movie => Number(movie.imdbRating) >= 8);
  }
  else if (filter == 2) {
      return moviesList.filter(movie => Number(movie.imdbRating) < 8);
  }
  return moviesList;
}

function App() {
  const [filter, setFilter] = useState("");
    let selectedMoviesList = filterMovies(filter);
  return (
    <div>
      <Filters setFilter = {setFilter}/>
      <div className="movies-list">
          {
            selectedMoviesList.map(movie => <MovieCard movie={movie}/>)
          }
      </div>
    </div>
  );
}

export default App;
