import { useState } from "react";

const MovieList = ({movies, setMovies}) => {
    const [titleInAsc, setTitleInAsc] = useState(true);
    const [yearInAsc, setYearInAsc] = useState(true); 
    const [franchiseInAsc, setFranchiseInAsc] = useState(true); 
    const [genreInAsc, setGenreInAsc] = useState(true); 
    const [ratingInAsc, setRatingInAsc] = useState(true); 

    const handleMovieDeletion = (event) => {
        if (window.confirm("Are you sure you want to delete this movie?")) {
            event.preventDefault();
            const toDeleteKey = Object.entries(event.nativeEvent.path[2])[0][1].return.key.replaceAll(' ', '_');
        
        setMovies((currentMovies) => {
            delete currentMovies[toDeleteKey];

            return {...currentMovies};   
        });
        } else {
            event.target.checked = false;
        }
    }

    const sortBy = (property, boolInAsc, setBoolInAsc) => {
        const arrayConvert = Object.entries(movies);
        
        arrayConvert.sort((movieOne, movieTwo) => {
            let  propA = (boolInAsc) ? movieOne[1][property] : movieTwo[1][property];
            let propB = (!boolInAsc) ? movieOne[1][property] : movieTwo[1][property];

            return propA < propB ? -1 : propA > propB ? 1 : 0;
        })
        const reconstructedObj = Object.fromEntries(arrayConvert);

        setMovies(() => {
            return {...reconstructedObj};   
        }); 
        setBoolInAsc(() => {
            return boolInAsc ? false : true;
        })
    }

    return (
        <section id="MovieList">
          <h2>Movies</h2>
      
          <table>
              <tbody>
              <tr>
                  <th onClick={() => {sortBy("title", titleInAsc, setTitleInAsc)}}>Title</th>
                  <th onClick={() => {sortBy("year", yearInAsc, setYearInAsc)}}>Year</th>
                  <th onClick={() => {sortBy("franchise", franchiseInAsc, setFranchiseInAsc)}}>Franchise</th>
                  <th onClick={() => {sortBy("genre", genreInAsc, setGenreInAsc)}}>Genre</th>
                  <th onClick={() => {sortBy("rating", ratingInAsc, setRatingInAsc)}}>Rating</th>
                  <th>Delete</th>
              </tr>
              </tbody>
          {Object.entries(movies).map(movie => (
              <tbody key={`${movie[1].title.toLowerCase()}_${movie[1].year}`}>
              <tr>
                  <td id="movieTitle">{movie[1].title}</td>
                  <td id="movieYear">{movie[1].year}</td>
                  <td id="movieFranchise">{movie[1].franchise}</td>
                  <td id="movieGenre">{movie[1].genre}</td>
                  <td id="movieRatings"><img src={`/images/${movie[1].rating}stars.png`} alt={`${movie[1].rating} star rating.`} width="107" height="20"/></td>
                  <td id="movieDelete"><input type="checkbox" className="deleteButton" onClick={handleMovieDeletion}></input></td>
              </tr>
              </tbody>
          ))}
          </table>
      </section>
    );
  };
   
  export default MovieList;
  