 import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb6f22536d7f1f3fded2cebfa99b5c02&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=eb6f22536d7f1f3fded2cebfa99b5c02&page=1";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API).then(resp => resp.json())
      .then(data => {
        setMovies(data.results);
      })


  }, [])

  return (
    <div className="movie-container">
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}

    </div>
  );
}

export default App;
