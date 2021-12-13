const MovieList = ({movies}) => {
    return (
        <section id="MovieList">
          <h2>Movies</h2>
      
          {Object.entries(movies).map(movie => (
          <table key={movie[0]}>
              <tbody>
              <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Franchise</th>
                  <th>Genre</th>
                  <th>Rating</th>
              </tr>
              <tr>
                  <td>{movie[1].title}</td>
                  <td>{movie[1].year}</td>
                  <td>{movie[1].franchise}</td>
                  <td>{movie[1].genre}</td>
                  <td><img src={`/images/${movie[1].rating}stars.png`} alt={`${movie[1].rating} star rating.`} width="107" height="20"/></td>
              </tr>
              </tbody>
          </table>
          ))}
      </section>
    );
  };
   
  export default MovieList;
  