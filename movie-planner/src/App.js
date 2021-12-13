import { useState } from "react";
import './App.css';
import InsertForm from './components/InsertForm';
import MovieList from './components/MovieList';
import Overview from './components/Overview';
import Title from './components/Title';

function App() {
    const [movies, setMovies] = useState({
        "the_martian_2015": 
            {title: "The Martian", year: 2015, franchise: "", genre: "Sci-Fi", rating: 5, favourite: true}, 
        "star_wars:_the_phantom_menace_(episode_i)_1999": 
            {title:"Star Wars: The Phantom Menace (Episode I)", year: 1999, franchise: "Star Wars", genre: "Sci-Fi", rating: 5, favourite: true}
        });

  return (
    <div className="App">
      <Title className="Title" />
      <Overview className="Overview" />
      <InsertForm className="InsertForm" setMovies={setMovies} />
      <MovieList className="MovieList" movies={movies} />
    </div>
  );
}

export default App;
