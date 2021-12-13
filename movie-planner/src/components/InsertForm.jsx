import { useState } from "react";

const InsertForm = () => {
    const [newMovie, setNewMovie] = useState({title: "", year: 1900, franchise: "", genre: "", rating: 0, favourite: false})
    
    const handleOnChange = (property, value) => {
        const movieObj = {...newMovie};

        movieObj[property] = value;

        setNewMovie(movieObj);
    }

    const addMovie = (event) => {
        event.preventDefault();
        console.log("Movie Submitted (but not actually, I need to add this still).");
        console.log(newMovie)
    }

    return (
      <section id="InsertForm">
          <form id="movieForm" onSubmit={addMovie}>
              <div className="formSections">
              <label htmlFor="title">Movie Title:</label>
              <label htmlFor="year">Year of Release:</label>
              <label htmlFor="franchise">Franchise:</label>
              <label htmlFor="genre">Genre:</label>
              <label htmlFor="rating">Star Rating:</label>
              <label htmlFor="favourite">Add to Favourites:</label>
              </div>

              <div className="formSections">
              <input type="text" id="title" name="title" value={newMovie.title} onChange={(event) => handleOnChange("title", event.target.value)} required></input>
              <input type="number" min="1900" max="2021" id="year" name="year" value={newMovie.year} onChange={(event) => handleOnChange("year", event.target.value)} required></input>
              <input type="text" id="franchise" name="franchise" value={newMovie.franchise} onChange={(event) => handleOnChange("franchise", event.target.value)}></input>
              <input type="text" id="genre" name="genre" value={newMovie.genre} onChange={(event) => handleOnChange("genre", event.target.value)} required></input>
              <input type="number" min="0" max="5" step="0.5" id="rating" name="rating" value={newMovie.rating} onChange={(event) => handleOnChange("rating", event.target.value)} required></input>
              <input type="checkbox" id="favourite" name="favourite" value={newMovie.favourite} onChange={(event) => handleOnChange("favourite", event.target.value)}></input>
              <button type="submit" id="addMovie">Add</button>
              </div>

          </form>
          <br/>
      </section>
    );
  };
  
  export default InsertForm;
  