 import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb6f22536d7f1f3fded2cebfa99b5c02&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=eb6f22536d7f1f3fded2cebfa99b5c02&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
   }

  const handleOnSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      getMovies(SEARCH_API+searchTerm);
        setSearchTerm('');
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <span className="heading">New Movie Summary + IMDB Rating</span>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
    </header>
    <div className="movie-container">
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}

    </div>
    </>
  );
}

export default App;
