import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]= useState([])
  const [isLoading,setisLoading] = useState(false)

  // const dummyMovies = () => {
  //   fetch('https://swapi.py4e.com/api/films').then(response=>{
  //     return response.json();
  //   }).then(res=>{
  //     const transformedMovies = res.results.map(movie=>{
  //       return {
  //         id: movie.episode_id,
  //         title: movie.title,
  //         releaseDate: movie.release_date,
  //         openingText: movie.opening_crawl
  //       } 
  //     })
  //     setMovies(transformedMovies);
  //   })
  // }

  async function dummyMovies() {
    setisLoading(true);
    const response = await fetch('https://swapi.py4e.com/api/films')
    const res = await response.json();
    const transformedMovies = res.results.map(movie=>{
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl
        } 
      })
      setMovies(transformedMovies);
      setisLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={dummyMovies}>Fetch Movies</button>
      </section>
      <section>
      {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
      {!isLoading && movies.length === 0 && <p>Found no movies</p>}
      {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
