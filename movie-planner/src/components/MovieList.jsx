import { useState } from "react";

const MovieList = ({movies, setMovies}) => {
    const [titleInAsc, setTitleInAsc] = useState(true);

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
            let titleA = "";
            let titleB = "";
            if (titleInAsc) {
                titleA = movieOne[0];
                titleB = movieTwo[0];
            } else {
                titleB = movieOne[0];
                titleA = movieTwo[0];
            }

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


    return (
        <section id="MovieList">
          <h2>Movies</h2>
      
          <table>
              <tbody>
              <tr>
                  <th onClick={titleSort}>Title</th>
                  <th>Year</th>
                  <th>Franchise</th>
                  <th>Genre</th>
                  <th>Rating</th>
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
  