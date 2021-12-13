const MovieList = ({movies}) => {
    return (
        <section id="MovieList">
          <h2>Movies</h2>
      
          <table>
              <tbody>
              <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Franchise</th>
                  <th>Genre</th>
                  <th>Rating</th>
              </tr>
              </tbody>
          {Object.entries(movies).map(movie => (
              <tbody>
              <tr>
                  <td id="movieTitle">{movie[1].title}</td>
                  <td id="movieYear">{movie[1].year}</td>
                  <td>{movie[1].franchise}</td>
                  <td>{movie[1].genre}</td>
                  <td><img src={`/images/${movie[1].rating}stars.png`} alt={`${movie[1].rating} star rating.`} width="107" height="20"/></td>
              </tr>
              </tbody>
          ))}
          </table>
      </section>
    );
  };
   
  export default MovieList;
  