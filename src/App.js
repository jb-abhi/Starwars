import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])

  const dummyMovies = () => {
    fetch('https://swapi.py4e.com/api/films').then(response=>{
      return response.json();
    }).then(res=>{
      const transformedMovies = res.results.map(movie=>{
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl
        } 
      })
      setMovies(transformedMovies);
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={dummyMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
