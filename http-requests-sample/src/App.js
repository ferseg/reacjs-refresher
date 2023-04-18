import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    const apiResponse = await fetch("https://swapi.dev/api/films/");
    const movieResponse = await apiResponse.json();
    const movieList = movieResponse.results.map((movie) => {
      return {
        id: movie.episode_id,
        openingText: movie.opening_crawl,
        title: movie.title,
        releaseDate: movie.release_date,
      };
    });
    setMovies(movieList);
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {(isLoading && <p>This is loading...</p>) || (
          <MoviesList movies={movies} />
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
