import { useState, useEffect } from "react";

const InsertForm = ({movies, setMovies}) => {
    const [newMovie, setNewMovie] = useState({title: "", year: 1900, franchise: "n/a", genre: "", rating: 0, favourite: false})
    const [isVisible, setIsVisible] = useState(false);

    const handleOnChange = (property, value) => {
        const movieObj = {...newMovie};

        movieObj[property] = value;

        setNewMovie(movieObj);
    }

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
      }, [movies]);

    const addMovie = (event) => {
        event.preventDefault();
        
        setMovies((currentMovies) => {
            const newKey = newMovie.title.toLowerCase().replace(' ', '_') + "_" + newMovie.year.toString();
            for (const key in currentMovies) {
                if (currentMovies[key] === newKey) {
                  return currentMovies;
                }
            }

            return {...currentMovies, [newKey]: newMovie};   
        });

        setNewMovie({title: "", year: 1900, franchise: "n/a", genre: "", rating: 0, favourite: false})
    }

    const testFunc = (event) => {
        setIsVisible((val) => !val)
        event.preventDefault();
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

              <p id="fileDesc">Alternatively, you can upload a .json file containing the movie data you would like to import.</p>
              <div id="fileUploadDiv">
                <div id="fileUploadChild">
                    <input type="file" id="fileInput" className="hidden" accept=".json"></input>
                    <label htmlFor="fileInput" id="uploadLabel">Upload file</label>
                </div>
                <div id="fileUploadChild">
                    <button id="formattingButton" onClick={testFunc}>?</button>
                 </div>
              </div>
                    {isVisible ? <div id="test"><p>Example json file format.</p><img id="formatImg" src="/images/jsonFormat.png" alt="formattingExample"/></div>
 : <></>}

            </form>
          <br/>
      </section>
    );
  };
  
  export default InsertForm;
  