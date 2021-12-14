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
            const toDeleteKey = Object.entries(event.nativeEvent.path[2])[0][1].return.key;
        
        setMovies((currentMovies) => {
            delete currentMovies[toDeleteKey];

            return {...currentMovies};   
        });
        } else {
            console.log(window)
            event.target.checked = false;
        }
    }

    const titleSort = () => {
        const arrayConvert = Object.entries(movies);

        arrayConvert.sort((movieOne, movieTwo) => {
            let titleA = (titleInAsc) ? movieOne[0] : movieTwo[0];
            let titleB = (!titleInAsc) ? movieOne[0] : movieTwo[0];

            return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
        })

        const reconstructedObj = Object.fromEntries(arrayConvert);

        setMovies(() => {
            return {...reconstructedObj};   
        }); 
        setTitleInAsc(() => {
            return titleInAsc ? false : true;
        })
    }

    const yearSort = () => {
        const arrayConvert = Object.entries(movies);

        arrayConvert.sort((movieOne, movieTwo) => {
            let yearA = (yearInAsc) ? movieOne[1].year : movieTwo[1].year;
            let yearB = (!yearInAsc) ? movieOne[1].year : movieTwo[1].year;

            return yearA < yearB ? -1 : yearA > yearB ? 1 : 0;
        })

        const reconstructedObj = Object.fromEntries(arrayConvert);

        setMovies(() => {
            return {...reconstructedObj};   
        }); 
        setYearInAsc(() => {
            return yearInAsc ? false : true;
        })
    }

    const franchiseSort = () => {
        const arrayConvert = Object.entries(movies);

        arrayConvert.sort((movieOne, movieTwo) => {
            let franchiseA = (franchiseInAsc) ? movieOne[1].franchise : movieTwo[1].franchise;
            let franchiseB = (!franchiseInAsc) ? movieOne[1].franchise : movieTwo[1].franchise;

            return franchiseA < franchiseB ? -1 : franchiseA > franchiseB ? 1 : 0;
        })

        const reconstructedObj = Object.fromEntries(arrayConvert);

        setMovies(() => {
            return {...reconstructedObj};   
        }); 
        setFranchiseInAsc(() => {
            return franchiseInAsc ? false : true;
        })
    }

    const genreSort = () => {
        const arrayConvert = Object.entries(movies);

        arrayConvert.sort((movieOne, movieTwo) => {
            let genreA = (genreInAsc) ? movieOne[1].genre : movieTwo[1].genre;
            let genreB = (!genreInAsc) ? movieOne[1].genre : movieTwo[1].genre;

            return genreA < genreB ? -1 : genreA > genreB ? 1 : 0;
        })

        const reconstructedObj = Object.fromEntries(arrayConvert);

        setMovies(() => {
            return {...reconstructedObj};   
        }); 
        setGenreInAsc(() => {
            return genreInAsc ? false : true;
        })
    }


    return (
        <section id="MovieList">
          <h2>Movies</h2>
      
          <table>
              <tbody>
              <tr>
                  <th onClick={titleSort}>Title</th>
                  <th onClick={yearSort}>Year</th>
                  <th onClick={franchiseSort}>Franchise</th>
                  <th onClick={genreSort}>Genre</th>
                  <th onClick={ratingSort}>Rating</th>
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
  